import {
  ConflictException,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UpdateRegistroDonacionDto } from './dto/update-registro_donacion.dto';
import { CreateRegistroDonacionesDto } from './dto/create-registro_donacion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Historia_Clinica } from '../historia_clinica/schema/historia_clinica.schema';
import { RegistroDonacion } from './schemas/registro_donacion.schema';
import { Donacion } from '../donacion/schemas/donacion.schemas';
import { Componentes } from '../componentes_donacion/schemas/componentes.schemas';
import { Sexo } from '../sexo/schema/sexo.schema';

const CODIGOS_MUNICIPIOS_PINAR_DEL_RIO: Record<string, string> = {
  'Pinar del Río': '101',
  'Consolación del Sur': '102',
  Guane: '103',
  'La Palma': '104',
  'Los Palacios': '105',
  Mantua: '106',
  'Minas de Matahambre': '107',
  'San Juan y Martínez': '108',
  'San Luis': '109',
  Sandino: '110',
  Viñales: '111',
};

@Injectable()
export class RegistroDonacionService {
  constructor(
    @InjectModel(RegistroDonacion.name)
    private registroDonacionModel: Model<RegistroDonacion>,
    @InjectModel(Historia_Clinica.name)
    private historiaclinicaModel: Model<Historia_Clinica>,
    @InjectModel(Donacion.name)
    private donacionModel: Model<Donacion>,
    @InjectModel(Componentes.name)
    private componentesModel: Model<Componentes>,
    @InjectModel(Sexo.name)
    private sexoModel: Model<Sexo>,
  ) { }

  async getOne(id: string) {
    const registro = await this.registroDonacionModel
      .findById(id)
      .populate({
        path: 'historiaClinica',
        populate: [
          { path: 'sexo' },
          { path: 'grupo_sanguine' },
          { path: 'factor' },
          { path: 'provincia' },
        ],
      })
      .populate('componente')
      .lean();
    if (!registro) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    return registro;
  }

  async create(createDto: CreateRegistroDonacionesDto) {
    try {
      let historiaClinicaId;
      let no_registro = '';
      const responsableInscripcion = createDto.responsableInscripcion;

      const historia = await this.historiaclinicaModel.findOne({
        ci: createDto.historiaClinica.ci,
      });
      const fechaActual = new Date();
      const componente = await this.componentesModel.findById(
        createDto.componente,
      );

      if (!componente) {
        throw new NotFoundException('Componente no encontrado');
      }
      const anio = new Date().getFullYear();
      console.log(componente);

      let numeroHC = '';
      if (!historia) {
        const nuevaHistoria = await this.historiaclinicaModel.create(
          createDto.historiaClinica,
        );
        historiaClinicaId = nuevaHistoria._id;
        numeroHC = nuevaHistoria.no_hc;
      } else {
        const updatedHistoria =
          await this.historiaclinicaModel.findOneAndUpdate(
            { ci: createDto.historiaClinica.ci },
            { $set: createDto.historiaClinica },
            { new: true },
          );
        if (!updatedHistoria) {
          throw new NotFoundException(
            'No se pudo actualizar la historia clínica',
          );
        }
        historiaClinicaId = updatedHistoria._id;
        numeroHC = updatedHistoria.no_hc;
      }

      const siglasComponente = componente.siglas;
      const municipioNombre = createDto.historiaClinica.municipio; // El nombre recibido
      const municipioCodigo =
        CODIGOS_MUNICIPIOS_PINAR_DEL_RIO[municipioNombre] || '000';
      const numeroConsecutivo =
        (await this.registroDonacionModel.countDocuments({
          fechaR: {
            $gte: new Date(`${anio}-01-01T00:00:00.000Z`),
            $lte: new Date(`${anio}-12-31T23:59:59.999Z`),
          },
        })) + 1;

      if (componente.nombreComponente === 'Sangre Total') {
        no_registro = `${siglasComponente}.${municipioCodigo}.${numeroConsecutivo}`;
      } else {
        no_registro = `${siglasComponente}-${numeroHC}.${anio}.${numeroConsecutivo}`;
      }

      const ultimaDonacion = await this.registroDonacionModel
        .findOne({
          historiaClinica: historiaClinicaId,
          //componente: createDto.componente,
          fechaD: { $ne: null }, // Solo registros con fecha de donación real
        })
        .sort({ fechaD: -1 });

      if (ultimaDonacion) {
        const sexoId = createDto.historiaClinica.sexo;
        const sexo = await this.sexoModel.findById(sexoId);

        if (!componente) {
          throw new NotFoundException('Componente no encontrado');
        }
        let diasEspera = 0;
        if (sexo?.nombre === 'M') {
          diasEspera = componente.diasEsperaMasculino;
          //diasEspera=90;
          console.log(componente.diasEsperaMasculino);
        } else if (sexo?.nombre === 'F') {
          diasEspera = componente.diasEsperaFemenino;
          console.log(componente.diasEsperaFemenino);
          //diasEspera=120;
        } else {
          throw new BadRequestException('Sexo no válido');
        }

        if (!ultimaDonacion.fechaD) {
          throw new BadRequestException(
            'La última donación no tiene fecha de donación registrada',
          );
        }
        const fechaUltima = ultimaDonacion.fechaD;
        fechaUltima.setDate(fechaUltima.getDate() + diasEspera);

        const hoy = new Date();
        if (hoy < fechaUltima) {
          throw new ConflictException(
            `El donante debe esperar hasta el ${fechaUltima.toLocaleDateString()} para volver a donar este componente.`,
          );
        }
      }

      const newRegistro = new this.registroDonacionModel({
        ...createDto,
        historiaClinica: historiaClinicaId,
        fechaR: fechaActual,
        no_registro,
        nombre_unidad: 'Banco de Sangre',
        numero_consecutivo: numeroConsecutivo,
      });

      return newRegistro.save();
    } catch (error) {
      console.error('Error al crear registro de donacion', error);
      throw error;
    }
  }

  async findByRangoFechas(fechaInicio: Date, fechaFin: Date) {
    try {
      const registros = await this.registroDonacionModel
        .find({
          fechaR: { $gte: fechaInicio, $lte: fechaFin },
        })
        .populate({
          path: 'historiaClinica',
          populate: [
            { path: 'sexo' },
            { path: 'grupo_sanguine' },
            { path: 'factor' },
            { path: 'provincia' },
          ],
        })
        .populate('componente')
        .exec();

      return registros.map((reg: any) => ({
        id: reg._id,
        no_registro: reg.no_registro || '',
        no_hc: reg.historiaClinica?.no_hc || '',
        ci_donante: reg.historiaClinica?.ci || '',
        nombre: reg.historiaClinica
          ? `${reg.historiaClinica.nombre || ''} ${reg.historiaClinica.primer_apellido || ''} ${reg.historiaClinica.segundo_apellido || ''}`.trim()
          : '',
        fecha_nacimiento: reg.historiaClinica?.fecha_nacimiento || '',
        edad: reg.historiaClinica?.edad || '',
        sexo: reg.historiaClinica?.sexo?.nombre || '',
        grupo: reg.historiaClinica?.grupo_sanguine?.nombre || '',
        rh: reg.historiaClinica?.factor?.signo || '',
        donante: reg.componente?.nombreComponente || '',
        fechaR: reg.fechaR,
        municipio: reg.historiaClinica?.municipio || '',
        provincia: reg.historiaClinica?.provincia?.nombre_provincia || '',
        direccion: reg.historiaClinica?.direccion || '',
        consejo_popular: reg.historiaClinica?.consejo_popular || '',
        no_consultorio: reg.historiaClinica?.no_consultorio || '',
        ocupacion: reg.historiaClinica?.ocupacion || '',
        telefono: reg.historiaClinica?.telefono || '',
        telefonoLaboral: reg.historiaClinica?.telefonoLaboral || '',
        centro_laboral: reg.historiaClinica?.centro_laboral || '',
        otra_localizacion: reg.historiaClinica?.otra_localizacion || '',
        responsableInscripcion: reg.responsableInscripcion || '',
        nombre_unidad: reg.nombre_unidad || '',
      }));
    } catch (error) {
      console.error('Error al obtener registros de donación:', error);
      throw error;
    }
  }

  async hojaCargoDonaciones(fechaInicio: Date, fechaFin: Date) {
    const registros = await this.registroDonacionModel
      .find({
        fechaD: { $gte: fechaInicio, $lte: fechaFin },
        estado: 'procesando',
      })
      .populate({
        path: 'historiaClinica',
        populate: [
          { path: 'sexo' },
          { path: 'grupo_sanguine' },
          { path: 'factor' },
          { path: 'provincia' },
        ],
      })
      .populate('componente')
      .exec();

    return registros.map((reg: any) => ({
      id: reg._id || '',
      fechaD: reg.fechaD,
      no_registro: reg.no_registro || '',
      ci: reg.historiaClinica?.ci || '',
      no_hc: reg.historiaClinica?.no_hc || '',
      nombre: reg.historiaClinica
        ? `${reg.historiaClinica.nombre || ''} ${reg.historiaClinica.primer_apellido || ''} ${reg.historiaClinica.segundo_apellido || ''}`.trim()
        : '',
      sexo: reg.historiaClinica?.sexo?.nombre || '',
      edad: reg.historiaClinica?.edad || '',
      grupo: reg.historiaClinica?.grupo_sanguine?.nombre || '',
      rh: reg.historiaClinica?.factor?.signo || '',
      componente: reg.componente || '',
      no_tubuladura: reg.no_tubuladura || '',
      no_lote: reg.no_lote || '',
      tipo_bolsa: reg.tipo_bolsa || '',
      volumen: reg.volumen || '',
      reaccion: reg.reaccion || '',
      TCM: reg.TCM || '',
      TP: reg.TP || '',
      tiempo: reg.tiempo || '',
      ciclos: reg.ciclos || '',
      ACD: reg.ACD || '',
      no_lote_kitACD: reg.no_lote_kitACD || '',
      no_lote_kitBach: reg.no_lote_kitBach || '',
      responsableExtraccion: reg.responsableExtraccion || '',
      nombre_unidad: reg.nombre_unidad || '',
      otra_localizacion: reg.historiaClinica?.otra_localizacion || '',
    }));
  }

  async findAllDonation(): Promise<RegistroDonacion[] | { message: string }> {
    try {
      return this.registroDonacionModel.find();
    } catch (error) {
      console.error('Error al obtener registros de donación:', error);
      throw error;
    }
  }

  async update(
    id: string,
    updateRegistroDonacionDto: UpdateRegistroDonacionDto,
  ) {
    // 1. Busca el registro actual
    const registro = await this.registroDonacionModel.findById(id);
    if (!registro)
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);

    let nuevoNoRegistro = registro.no_registro;

    // 2. Si el componente cambia, recalcula el no_registro
    if (
      updateRegistroDonacionDto.componente &&
      updateRegistroDonacionDto.componente.toString() !==
      registro.componente.toString()
    ) {
      // 3. Obtén el nuevo componente
      const nuevoComponente = await this.componentesModel.findById(
        updateRegistroDonacionDto.componente,
      );
      if (!nuevoComponente)
        throw new NotFoundException('Componente no encontrado');

      // 4. Obtén el año y el número de historia clínica
      const anio = new Date().getFullYear();
      const historia = await this.historiaclinicaModel.findById(
        registro.historiaClinica,
      );
      const numeroHC = historia?.no_hc || '';

      // 5. Calcula el consecutivo para el nuevo componente y año
      const numeroConsecutivo =
        (await this.registroDonacionModel.countDocuments({
          componente: updateRegistroDonacionDto.componente,
          fechaR: {
            $gte: new Date(`${anio}-01-01T00:00:00.000Z`),
            $lte: new Date(`${anio}-12-31T23:59:59.999Z`),
          },
        })) + 1;

      // 6. Construye el nuevo no_registro
      nuevoNoRegistro = `${nuevoComponente.siglas}-${numeroHC}.${anio}.${numeroConsecutivo}`;
    }

    // 7. Actualiza el registro (incluyendo el nuevo no_registro si cambió)
    const updatedRegistro = await this.registroDonacionModel
      .findByIdAndUpdate(
        id,
        { ...updateRegistroDonacionDto, no_registro: nuevoNoRegistro },
        { new: true },
      )
      .exec();

    if (!updatedRegistro) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    return updatedRegistro;
  }

  async updatee(
    id: string,
    updateRegistroDonacionDto: UpdateRegistroDonacionDto,
  ) {
    const updatedRegistro = await this.registroDonacionModel
      .findByIdAndUpdate(id, updateRegistroDonacionDto, { new: true })
      .exec();

    if (!updatedRegistro) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    return updatedRegistro;
  }

  //Actualizar datos laboratorios
  async updateLaboratorio(id: string, updateData: any): Promise<any> {
    try {
      const updatedRegistro = await this.registroDonacionModel.findOneAndUpdate(
        { _id: id }, // Busca por el ID del registro
        {
          $push: {
            resultado_VIH: { $each: updateData.resultado_VIH },

            resultado_hepatitisB: { $each: updateData.resultado_hepatitisB },

            resultado_hepatitisC: { $each: updateData.resultado_hepatitisC },

            fecha_suma: { $each: updateData.fecha_suma },
          },
          $set: {
            estado: updateData.estado,
          },
        },
        { new: true }, // Devuelve el documento actualizado
      );

      if (!updatedRegistro) {
        throw new Error(`Registro con ID ${id} no encontrado.`);
      }

      return updatedRegistro;
    } catch (error) {
      console.error('Error al actualizar el registro:', error);
      throw new Error('No se pudo actualizar el registro.');
    }
  }

  //Actualizar datos laboratorio Inmuno
  async updateLaboratorioInmuno(id: string, updateData: any): Promise<any> {
    try {
      const updatedRegistro = await this.registroDonacionModel.findOneAndUpdate(
        { _id: id }, // Busca por el ID del registro
        {
          $push: {
            resultado_serologia: { $each: updateData.resultado_serologia },

            resultado_tipage: { $each: updateData.resultado_tipage },

            resultado_contratipaje: {
              $each: updateData.resultado_contratipaje,
            },

            resultado_rh: { $each: updateData.resultado_rh },

            resultado_DU: { $each: updateData.resultado_DU },
            fecha_inmuno: { $each: updateData.fecha_inmuno },

          },
          $set: {
            estado: updateData.estado,
          },
        },
        { new: true }, // Devuelve el documento actualizado
      );

      if (!updatedRegistro) {
        throw new Error(`Registro con ID ${id} no encontrado.`);
      }

      return updatedRegistro;
    } catch (error) {
      console.error('Error al actualizar el registro:', error);
      throw new Error('No se pudo actualizar el registro.');
    }
  }

  //Actualizar datos laboratorio Calidad
  async updateLaboratorioCalidad(id: string, updateData: any): Promise<any> {
    try {
      const updatedRegistro = await this.registroDonacionModel.findOneAndUpdate(
        { _id: id }, // Busca por el ID del registro
        {
          $push: {
            resultado_hemoglobina: { $each: updateData.resultado_hemoglobina },

            resultado_TGP: { $each: updateData.resultado_TGP },

            resultado_eritro: { $each: updateData.resultado_eritro },

            resultado_hematocrito: { $each: updateData.resultado_hematocrito },

            resultado_proteinas_totales: {
              $each: updateData.resultado_proteinas_totales,
            },
            fecha_calidad: {
              $each: updateData.fecha_calidad,
            },
          },
          $set: {
            estado: updateData.estado,
          },
        },
        { new: true }, // Devuelve el documento actualizado
      );

      if (!updatedRegistro) {
        throw new Error(`Registro con ID ${id} no encontrado.`);
      }

      return updatedRegistro;
    } catch (error) {
      console.error('Error al actualizar el registro:', error);
      throw new Error('No se pudo actualizar el registro.');
    }
  }

  //Eliminar registro de donacion

  async delete(id: string) {
    const deletedRegistro = await this.registroDonacionModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedRegistro) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    return deletedRegistro;
  }

  // Metodo para cargar los donantes a prechequeo exceptuando los PLASMA
  // Metodo para cargar los donantes a prechequeo exceptuando los PLASMA
  async findAll() {
    const hoy = new Date();
    const inicioDia = new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      hoy.getDate(),
      0,
      0,
      0,
      0,
    );
    const finDia = new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      hoy.getDate(),
      23,
      59,
      59,
      999,
    );

    const registros = await this.registroDonacionModel
      .find({
        fechaR: { $gte: inicioDia, $lte: finDia },
        $or: [
          { apto_prechequeo: { $exists: false } },
          { apto_prechequeo: null },
        ],
      })
      .populate({
        path: 'historiaClinica',
        select:
          'ci nombre primer_apellido segundo_apellido edad sexo grupo_sanguine factor apto_prechequeo',
        populate: [
          { path: 'sexo', select: 'nombre' },
          { path: 'grupo_sanguine', select: 'nombre' },
          { path: 'factor', select: 'signo' },
        ],
      })
      .populate('componente', 'nombreComponente nombre_componente')
      .exec();

    const filtrados = registros.filter(
      (reg: any) => reg.componente.nombreComponente?.toLowerCase() !== 'plasma'
    );

    return filtrados.map((reg: any) => {
      return {
        _id: reg._id,
        ci: reg.historiaClinica?.ci || '',
        nombre: reg.historiaClinica?.nombre || '',
        primer_apellido: reg.historiaClinica?.primer_apellido || '',
        segundo_apellido: reg.historiaClinica?.segundo_apellido || '',
        edad: reg.historiaClinica?.edad || '',
        sexo: reg.historiaClinica?.sexo?.nombre || '',
        grupo_sanguine: reg.historiaClinica?.grupo_sanguine?.nombre || '',
        factor: reg.historiaClinica?.factor?.signo || '',
        componente: {
          nombreComponente: reg.componente?.nombreComponente || '',
        },
      };
    });
  }

  //Metodo para modulo prechequeo para vista Resultados de Prechequeo
  async getDatosCompletos() {
    // Calcula el inicio y fin del día de hoy
    const hoy = new Date();
    const inicioDia = new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      hoy.getDate(),
      0,
      0,
      0,
      0,
    );
    const finDia = new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      hoy.getDate(),
      23,
      59,
      59,
      999,
    );

    const registros = await this.registroDonacionModel
      .find({
        fechaR: { $gte: inicioDia, $lte: finDia },
        $or: [
          { apto_interrogatorio: { $exists: false } },
          { apto_interrogatorio: null },
        ],
      })
      .populate(
        'historiaClinica',
        'nombre primer_apellido segundo_apellido _id',
      )
      .exec();

    if (!registros) throw new NotFoundException('Registro no encontrado');

    // Filtrar según la lógica con nombreComponente
    const registrosFiltrados = registros.filter(reg => {
      const esPlasma = reg.componente?.nombreComponente?.toLowerCase() === 'plasma';
      const aptoInterrogatorioNulo = reg.apto_interrogatorio === null || reg.apto_interrogatorio === undefined;
      const aptoPrechequeoLleno = reg.apto_prechequeo !== null && reg.apto_prechequeo !== undefined;

      if (esPlasma) {
        // Para plasma: apto_interrogatorio nulo 
        return aptoInterrogatorioNulo ;
      } else {
        // Para otros componentes: solo apto_interrogatorio nulo y apto_prechequeo lleno
        return aptoInterrogatorioNulo && aptoPrechequeoLleno;
      }
    });

    return registrosFiltrados.map((reg: any) => ({
      _id: reg._id,
      historiaClinicaId: reg.historiaClinica?._id,
      ci: reg.historiaClinica?.ci || '',
      nombre: reg.historiaClinica?.nombre || '',
      primer_apellido: reg.historiaClinica?.primer_apellido || '',
      segundo_apellido: reg.historiaClinica?.segundo_apellido || '',
      examenP_grupo: reg.examenP_grupo,
      examenP_factor: reg.examenP_factor,
      examenP_hemoglobina: reg.examenP_hemoglobina,
      apto_prechequeo:
        reg.apto_prechequeo === true
          ? 'Apto'
          : reg.apto_prechequeo === false
            ? 'No Apto'
            : '',
    }));
  }
  async getPrechequeoById(id: string) {
    const reg = await this.registroDonacionModel.findById(id).exec();
    if (!reg) throw new NotFoundException('Registro no encontrado');
    return {
      examenP_grupo: reg.examenP_grupo,
      examenP_factor: reg.examenP_factor,
      examenP_hemoglobina: reg.examenP_hemoglobina,
    };
  }

  // Metodo para modulo prechequeo para vista Donantes no Aptos
  async getDonantesNoAptos() {
    // Busca todos los registros donde apto_interrogatorio es false
    const registros = await this.registroDonacionModel
      .find({ apto_interrogatorio: false })
      .populate('historiaClinica', 'ci nombre primer_apellido segundo_apellido')
      .exec();

    // Devuelve CI y observación (ajusta el campo de observación según tu modelo)
    return registros.map((reg: any) => ({
      ci: reg.historiaClinica?.ci || reg.ci,
      nombre: reg.historiaClinica?.nombre || '',
      primer_apellido: reg.historiaClinica?.primer_apellido || '',
      segundo_apellido: reg.historiaClinica?.segundo_apellido || '',
      observacion_interrogatorio:
        reg.observacion_interrogatorio || 'No Observación',
    }));
  }

  async getDonacionesDiarias() {
    const registros = await this.registroDonacionModel
      .find()
      .populate({
        path: 'historiaClinica',
        select: 'ci no_hc sexo edad grupo_sanguine factor',
        populate: [
          { path: 'sexo', select: 'nombre' },
          { path: 'grupo_sanguine', select: 'nombre' },
          { path: 'factor', select: 'signo' },
        ],
      })
      .exec();

    return registros.map((reg: any) => ({
      id: reg._id,
      no: reg.no_registro,
      hc: reg.historiaClinica?.no_hc ?? 'Sin historia',
      desecho: 'Bolsa',
      motivo_desecho: reg.motivo_desecho,
      sexo: reg.historiaClinica?.sexo?.nombre ?? '',
      edad: reg.historiaClinica?.edad ?? '',
      grupo: reg.historiaClinica?.grupo_sanguine?.nombre ?? '',
      factor: reg.historiaClinica?.factor?.signo ?? '',
      volumen: reg.volumen,
      estado: reg.estado,
      entidad: 'Banco de Sangre',
      fechaD: reg.fechaD,
    }));
  }

  //Metodo para citar donantes por el medico.
  async getDonantesQuePuedenDonar() {
    const hoy = new Date();

    const registros = await this.registroDonacionModel
      .find()
      .populate({
        path: 'historiaClinica',
        select: 'ci nombre primer_apellido segundo_apellido sexo citado',
        populate: { path: 'sexo', select: 'nombre' },
      })
      .populate(
        'componente',
        'nombreComponente diasEsperaMasculino diasEsperaFemenino',
      )
      .exec();

    const donantes = registros.filter((reg: any) => {
      if (!reg.fechaR || !reg.componente) return false;
      const historiaClinica = reg.historiaClinica;
      if (!historiaClinica || historiaClinica.citado !== false) return false; // Solo los NO citados

      const fechaUltima = new Date(reg.fechaR);
      const sexo = historiaClinica.sexo?.nombre;
      let diasEspera = 0;

      if (sexo === 'M') {
        diasEspera = reg.componente.diasEsperaMasculino || 0;
      } else if (sexo === 'F') {
        diasEspera = reg.componente.diasEsperaFemenino || 0;
      } else {
        return false;
      }

      const fechaPermitida = new Date(fechaUltima);
      fechaPermitida.setDate(fechaUltima.getDate() + diasEspera);

      return hoy >= fechaPermitida;
    });

    return donantes.map((reg: any) => ({
      id: reg._id,
      historiaClinicaId: reg.historiaClinica?._id,
      ci: reg.historiaClinica?.ci,
      nombre: reg.historiaClinica?.nombre,
      primer_apellido: reg.historiaClinica?.primer_apellido,
      segundo_apellido: reg.historiaClinica?.segundo_apellido,
      sexo: reg.historiaClinica?.sexo?.nombre,
      componente: reg.componente?.nombreComponente,
      fechaUltimaDonacion: reg.fechaR,
      fechaPermitida: (() => {
        const fechaUltima = new Date(reg.fechaR);
        const sexo = reg.historiaClinica?.sexo?.nombre;
        let diasEspera = 0;
        if (sexo === 'M') diasEspera = reg.componente.diasEsperaMasculino || 0;
        if (sexo === 'F') diasEspera = reg.componente.diasEsperaFemenino || 0;
        fechaUltima.setDate(fechaUltima.getDate() + diasEspera);
        return fechaUltima;
      })(),
    }));
  }

  // Cargar datos para laboratorios
  async getConsecutivoAndHistoriaClinicaAceptada() {
    const registros = await this.registroDonacionModel
      .find()
      .populate('historiaClinica', 'no_hc')
      // Se mantiene la población de historia clínica
      .exec();

    // Filtra los registros que tienen estado "aceptada" (insensible a mayúsculas/minúsculas)
    const filtrados = registros.filter(
      (reg: any) => reg.estado?.toLowerCase() === 'aceptada',
    );

    // Mapea los registros filtrados para devolver el formato esperado
    return filtrados.map((reg: any) => ({
      _id: reg._id,
      historiaClinica: reg.historiaClinica,
      estado: reg.estado?.toString() || '',
      numero_consecutivo: reg.numero_consecutivo,
      resultado_VIH: reg.resultado_VIH,
      resultado_hepatitisB: reg.resultado_hepatitisB,
      resultado_hepatitisC: reg.resultado_hepatitisC,
      resultado_serologia: reg.resultado_serologia,
      resultado_tipage: reg.resultado_tipage,
      resultado_contratipaje: reg.resultado_contratipaje,
      resultado_rh: reg.resultado_rh,
      resultado_DU: reg.resultado_DU,
    }));
  }

  // Cargar datos para laboratorio Calidad
  async getConsecutivoAndHistoriaClinicaControlados() {
    const registros = await this.registroDonacionModel
      .find()
      .populate('historiaClinica', 'no_hc es_donanteControlado')
      //.populate('historiaClinica','es_donanteControlado')

      // Se mantiene la población de historia clínica
      .exec();

    // Filtra los registros que tienen estado "aceptada" (insensible a mayúsculas/minúsculas)
    const filtrados = registros.filter(
      (reg: any) =>
        reg.estado?.toLowerCase() === 'aceptada' &&
        reg.historiaClinica?.es_donanteControlado === true,
    );

    // Mapea los registros filtrados para devolver el formato esperado
    return filtrados.map((reg: any) => ({
      _id: reg._id,
      historiaClinica: reg.historiaClinica,
      estado: reg.estado?.toString() || '',
      numero_consecutivo: reg.numero_consecutivo,
      resultado_hemoglobina: reg.resultado_hemoglobina,
      resultado_hematocrito: reg.resultado_hematocrito,
      resultado_eritro: reg.resultado_eritro,
      resultado_proteinas_totales: reg.resultado_proteinas_totales,
      resultado_TGP: reg.resultado_TGP,
      resultado_contratipaje: reg.resultado_contratipaje,
    }));
  }

  //Donaciones
  async getDonacionesAptasInterrogatorio() {
    const hoy = new Date();
    const inicioDia = new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      hoy.getDate(),
      0,
      0,
      0,
      0,
    );
    const finDia = new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      hoy.getDate(),
      23,
      59,
      59,
      999,
    );

    const registros = await this.registroDonacionModel
      .find({
        apto_interrogatorio: true,
        fechaR: { $gte: inicioDia, $lte: finDia },
        estado: null,
      })
      .populate({
        path: 'historiaClinica',
        populate: [
          { path: 'sexo' },
          { path: 'grupo_sanguine' },
          { path: 'factor' },
        ],
      })
      .populate('componente')
      .exec();

    return registros.map((reg: any) => ({
      id: reg._id,
      ci: reg.historiaClinica?.ci || '',
      nombre: reg.historiaClinica?.nombre || '',
      primer_apellido: reg.historiaClinica?.primer_apellido || '',
      segundo_apellido: reg.historiaClinica?.segundo_apellido || '',
      edad: reg.historiaClinica?.edad || '',
      sexo: reg.historiaClinica?.sexo?.nombre || '',
      grupo: reg.historiaClinica?.grupo_sanguine?.nombre || '',
      rh: reg.historiaClinica?.factor?.signo || '',
      donante: reg.componente?.nombreComponente || '',
      // agrega aquí cualquier otro campo que tu DataGrid necesite
    }));
  }

  // Método para cargar las muestras analizadas
  async getAnalizadas(): Promise<any> {
    const registros = await this.registroDonacionModel
      .find()
      .populate('historiaClinica', 'no_hc') // Popula el número de historia clínica
      .exec();
  
    console.log('Registros obtenidos:', registros); // Verifica los datos obtenidos
  
    // Filtrar registros que tengan al menos un resultado en alguno de los arrays
    const registrosFiltrados = registros.filter((reg: any) => {
      return (
        (reg.resultado_VIH?.length ?? 0) > 0 ||
        (reg.resultado_hepatitisB?.length ?? 0) > 0 ||
        (reg.resultado_hepatitisC?.length ?? 0) > 0 ||
        (reg.resultado_serologia?.length ?? 0) > 0 ||
        (reg.resultado_tipage?.length ?? 0) > 0 ||
        (reg.resultado_rh?.length ?? 0) > 0 ||
        (reg.resultado_contratipaje?.length ?? 0) > 0 ||
        (reg.resultado_DU?.length ?? 0) > 0
      );
    });
  
    return registrosFiltrados.map((reg: any) => ({
      id: reg._id,
      numero_consecutivo: reg.numero_consecutivo,
      no_hc: reg.historiaClinica?.no_hc || '',
      resultado_VIH: reg.resultado_VIH?.length > 0 ? reg.resultado_VIH[0] : '', // Primera posición del array si existe
  
      resultado_hepatitisB:
        reg.resultado_hepatitisB?.length > 0 ? reg.resultado_hepatitisB[0] : '', // Primera posición del array si existe
  
      resultado_hepatitisC:
        reg.resultado_hepatitisC?.length > 0 ? reg.resultado_hepatitisC[0] : '', // Primera posición del array si existe
      fecha_suma: reg.fecha_suma?.length > 0 ? reg.fecha_suma[0] : '',
      resultado_serologia:
        reg.resultado_serologia?.length > 0 ? reg.resultado_serologia[0] : '', // Primera posición del array si existe
  
      resultado_tipage:
        reg.resultado_tipage?.length > 0 ? reg.resultado_tipage[0] : '', // Primera posición del array si existe
  
      resultado_rh: reg.resultado_rh?.length > 0 ? reg.resultado_rh[0] : '', // Primera posición del array si existe
  
      resultado_contratipaje:
        reg.resultado_contratipaje?.length > 0
          ? reg.resultado_contratipaje[0]
          : '', // Primera posición del array si existe
  
      resultado_DU: reg.resultado_DU?.length > 0 ? reg.resultado_DU[0] : '', // Primera posición del array si existe
      fecha_inmuno: reg.fecha_inmuno?.length > 0 ? reg.fecha_inmuno[0] : '',
    }));
  }
  
  async getReanalizadasSuma(): Promise<any> {
    // 1. Obtén todos los registros (no solo los de estado "Reanalizada")
    const registros = await this.registroDonacionModel
      .find()
      .populate('historiaClinica', 'no_hc')
      .exec();
  
    // 2. Define los campos de arrays relevantes
    const arrayFields = [
      'resultado_VIH',
      'resultado_hepatitisB',
      'resultado_hepatitisC',
      'fecha_suma'
    ];
  
    // 3. Filtra los registros según las condiciones
    const filtrados = registros.filter((reg: any) =>
      reg.estado === 'Reanalizada' ||
      arrayFields.some(field =>
        Array.isArray(reg[field]) && reg[field].length > 1
      )
    );
  
    // 4. Mapea los datos como necesitas
    return filtrados.map((reg: any) => ({
      id: reg._id,
      numero_consecutivo: reg.numero_consecutivo,
      no_hc: reg.historiaClinica?.no_hc || '',
  
      // Primer reanálisis
      resultado_VIH1: reg.resultado_VIH?.[1] ?? '',
      resultado_hepatitisB1: reg.resultado_hepatitisB?.[1] ?? '',
      resultado_hepatitisC1: reg.resultado_hepatitisC?.[1] ?? '',
      fecha_suma: reg.fecha_suma?.[1] ?? '',
  
      // Segundo reanálisis
      resultado_VIH2: reg.resultado_VIH?.[2] ?? '',
      resultado_hepatitisB2: reg.resultado_hepatitisB?.[2] ?? '',
      resultado_hepatitisC2: reg.resultado_hepatitisC?.[2] ?? '',
      fecha_suma1: reg.fecha_suma?.[2] ?? '',
  
      // Tercer reanálisis
      resultado_VIH3: reg.resultado_VIH?.[3] ?? '',
      resultado_hepatitisB3: reg.resultado_hepatitisB?.[3] ?? '',
      resultado_hepatitisC3: reg.resultado_hepatitisC?.[3] ?? '',
      fecha_suma2: reg.fecha_suma?.[3] ?? '',
    }));
  }
  
  // Reanalizadas Inmunohematología
  async getReanalizadasInmuno(): Promise<any> {
    // 1. Obtén todos los registros
    const registros = await this.registroDonacionModel
      .find()
      .populate('historiaClinica', 'no_hc')
      .exec();
  
    // 2. Define los campos de arrays relevantes
    const arrayFields = [
      'resultado_serologia',
      'resultado_DU',
      'resultado_tipage',
      'resultado_contratipaje',
      'resultado_rh',
      'fecha_inmuno'
    ];
  
    // 3. Filtra según las condiciones
    const filtrados = registros.filter((reg: any) =>
      reg.estado === 'Reanalizada' ||
      arrayFields.some(field =>
        Array.isArray(reg[field]) && reg[field].length > 1
      )
    );
  
    // 4. Mapea los datos como necesitas
    return filtrados.map((reg: any) => ({
      id: reg._id,
      numero_consecutivo: reg.numero_consecutivo,
      no_hc: reg.historiaClinica?.no_hc || '',
  
      // Primer reanálisis
      resultado_serologia1: reg.resultado_serologia?.[1] ?? '',
      resultado_DU1: reg.resultado_DU?.[1] ?? '',
      resultado_tipage1: reg.resultado_tipage?.[1] ?? '',
      resultado_contratipaje1: reg.resultado_contratipaje?.[1] ?? '',
      resultado_rh1: reg.resultado_rh?.[1] ?? '',
      fecha_inmuno: reg.fecha_inmuno?.[1] ?? '',
  
      // Segundo reanálisis
      resultado_serologia2: reg.resultado_serologia?.[2] ?? '',
      resultado_DU2: reg.resultado_DU?.[2] ?? '',
      resultado_tipage2: reg.resultado_tipage?.[2] ?? '',
      resultado_contratipaje2: reg.resultado_contratipaje?.[2] ?? '',
      resultado_rh2: reg.resultado_rh?.[2] ?? '',
      fecha_inmuno1: reg.fecha_inmuno?.[2] ?? '',
  
      // Tercer reanálisis
      resultado_serologia3: reg.resultado_serologia?.[3] ?? '',
      resultado_DU3: reg.resultado_DU?.[3] ?? '',
      resultado_tipage3: reg.resultado_tipage?.[3] ?? '',
      resultado_contratipaje3: reg.resultado_contratipaje?.[3] ?? '',
      resultado_rh3: reg.resultado_rh?.[3] ?? '',
      fecha_inmuno2: reg.fecha_inmuno?.[3] ?? '',
    }));
  }
  

  // Método para cargar las muestras analizadas de calidad
  async getAnalizadasCalidad(): Promise<any> {
    const registros = await this.registroDonacionModel
      .find()
      .populate('historiaClinica', 'no_hc es_donanteControlado')
      .exec();
  
    // Filtra los registros: donante controlado y al menos un valor en algún array de calidad
    const calidadArrayFields = [
      'resultado_hemoglobina',
      'resultado_eritro',
      'resultado_hematocrito',
      'resultado_TGP',
      'resultado_proteinas_totales',
      'fecha_calidad'
    ];
  
    const filtrados = registros.filter(
      (reg: any) =>
        reg.historiaClinica?.es_donanteControlado === true &&
        calidadArrayFields.some(
          field => Array.isArray(reg[field]) && reg[field].length > 0
        )
    );
  
    return filtrados.map((reg: any) => ({
      id: reg._id,
      numero_consecutivo: reg.numero_consecutivo,
      no_hc: reg.historiaClinica?.no_hc || '',
      resultado_hemoglobina: reg.resultado_hemoglobina?.[0] ?? '',
      resultado_eritro: reg.resultado_eritro?.[0] ?? '',
      resultado_hematocrito: reg.resultado_hematocrito?.[0] ?? '',
      resultado_TGP: reg.resultado_TGP?.[0] ?? '',
      resultado_proteinas_totales: reg.resultado_proteinas_totales?.[0] ?? '',
      fecha_calidad: reg.fecha_calidad?.[0] ?? '',
    }));
  }
  
  // Método para cargar las muestras analizadas de calidad
  async getCalidadRepeticion(): Promise<any> {
    const registros = await this.registroDonacionModel
      .find()
      .populate('historiaClinica', 'no_hc es_donanteControlado')
      .exec();
  
    // Campos de arrays relevantes para calidad repetida
    const calidadArrayFields = [
      'resultado_hemoglobina',
      'resultado_eritro',
      'resultado_hematocrito',
      'resultado_TGP',
      'resultado_proteinas_totales',
      'fecha_calidad'
    ];
  
    // Filtra por:
    // - Donante controlado
    // - Y (más de un dato en algún array relevante O estado === "Reanalizada")
    const filtrados = registros.filter(
      (reg: any) =>
        reg.historiaClinica?.es_donanteControlado === true &&
        (
          reg.estado === 'Reanalizada' ||
          calidadArrayFields.some(
            field => Array.isArray(reg[field]) && reg[field].length > 1
          )
        )
    );
  
    return filtrados.map((reg: any) => ({
      id: reg._id,
      numero_consecutivo: reg.numero_consecutivo,
      no_hc: reg.historiaClinica?.no_hc || '',
      resultado_hemoglobina1: reg.resultado_hemoglobina?.[1] ?? '',
      resultado_eritro1: reg.resultado_eritro?.[1] ?? '',
      resultado_hematocrito1: reg.resultado_hematocrito?.[1] ?? '',
      resultado_TGP1: reg.resultado_TGP?.[1] ?? '',
      resultado_proteinas_totales1: reg.resultado_proteinas_totales?.[1] ?? '',
      fecha_calidad: reg.fecha_calidad?.[1] ?? '',
    }));
  }
  
  //Metodo para cargar todos los registros de donacion de una misma historia Modulo HC
  async getRegistrosPorHistoriaClinica(historiaClinicaId: string) {
    const registros = await this.registroDonacionModel
      .find({ historiaClinica: new Types.ObjectId(historiaClinicaId) })
      .populate('reaccion', 'nombre_estado')
      .exec();
    return registros.map((reg: any) => ({
      _id: reg._id,
      fechaD: reg.fechaD,
      lugar: 'Banco de sangre',
      reaccion: reg.reaccion?.nombre_estado || '',
    }));
  }
}
