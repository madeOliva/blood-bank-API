import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateRegistroDonacionDto } from './dto/update-registro_donacion.dto';
import { CreateRegistroDonacionesDto } from './dto/create-registro_donacion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Historia_Clinica } from '../historia_clinica/schema/historia_clinica.schema';
import { RegistroDonacion } from './schemas/registro_donacion.schema';
import { Donacion } from '../donacion/schemas/donacion.schemas';
import { Componentes } from '../componentes_donacion/schemas/componentes.schemas';
import { Estados } from '../estados/schemas/estados.schemas';
import { Sexo } from '../sexo/schema/sexo.schema';

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
    @InjectModel(Estados.name)
    private estadosModel: Model<Estados>,
    @InjectModel(Sexo.name)
    private sexoModel: Model<Sexo>,
  ) {}

  async getOne(id: string) {
    const registro = await this.registroDonacionModel
      .findById(id)
      .populate('historiaClinica')
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

      let numeroHC = '';
      if (!historia) {
        const nuevaHistoria = await this.historiaclinicaModel.create(
          createDto.historiaClinica,
        );
        historiaClinicaId = nuevaHistoria._id;
        numeroHC = nuevaHistoria.no_hc;
      } else {
        // Modificar la historia clínica existente
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

      // Generar no_registro
      const siglasComponente = componente.siglas;
      const numeroConsecutivo =
        (await this.registroDonacionModel.countDocuments({
          fechaR: {
            $gte: new Date(`${anio}-01-01T00:00:00.000Z`),
            $lte: new Date(`${anio}-12-31T23:59:59.999Z`),
          },
        })) + 1;
      no_registro = `${siglasComponente}-${numeroHC}.${anio}.${numeroConsecutivo}`;

      // Validaciones adicionales (si las tienes)
      // ... (puedes dejar aquí tu lógica de validación de última donación, sexo, etc.)

      const newRegistro = new this.registroDonacionModel({
        ...createDto,
        historiaClinica: historiaClinicaId,
        fechaR: fechaActual,
        no_registro,
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
        edad: reg.historiaClinica?.edad || '',
        sexo: reg.historiaClinica?.sexo?.nombre || '',
        grupo: reg.historiaClinica?.grupo_sanguine?.nombre || '',
        rh: reg.historiaClinica?.factor?.signo || '',
        donante: reg.componente?.nombreComponente || '',
        fechaR: reg.fechaR,
        municipio: reg.historiaClinica?.municipio || '',
        provincia: reg.historiaClinica?.provincia?.nombre_provincia || '',
        consejo_popular: reg.historiaClinica?.consejo_popular || '',
        no_consultorio: reg.historiaClinica?.no_consultorio || '',
        ocupacion: reg.historiaClinica?.ocupacion || '',
        telefono: reg.historiaClinica?.telefono || '',
        telefonoLaboral: reg.historiaClinica?.telefonoLaboral || '',
        centro_laboral: reg.historiaClinica?.centro_laboral || '',
        otra_localizacion: reg.historiaClinica?.otra_localizacion || '',
      }));
    } catch (error) {
      console.error('Error al obtener registros de donación:', error);
      throw error;
    }
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
    const updatedRegistro = await this.registroDonacionModel
      .findByIdAndUpdate(id, updateRegistroDonacionDto, { new: true })
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

  async delete(id: string) {
    const deletedRegistro = await this.registroDonacionModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedRegistro) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    return deletedRegistro;
  }

  async findAll() {
    const registros = await this.registroDonacionModel
      .find()
      .populate(
        'historiaClinica',
        'ci nombre primer_apellido segundo_apellido edad sexo grupo_sanguine factor',
      )
      .populate('componente', 'nombreComponente')
      .exec();

    // Filtra los que NO son plasma
    const filtrados = registros.filter(
      (reg: any) =>
        reg.componente?.nombreComponente?.toLowerCase() !== 'plasma',
    );

    return filtrados.map((reg: any) => ({
      _id: reg._id,
      historiaClinica: reg.historiaClinica,
      componente: {
        nombreComponente: reg.componente?.nombreComponente || '',
      },
    }));
  }

  async getDatosCompletos() {
    const registros = await this.registroDonacionModel
      .find()
      .populate('historiaClinica', 'nombre primer_apellido segundo_apellido')
      .exec();

    if (!registros) throw new NotFoundException('Registro no encontrado');

    return registros.map((reg: any) => ({
      _id: reg._id,
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
      .populate('historiaClinica', 'ci sexo edad grupo_sanguineo factor')
      .exec();

    console.log(JSON.stringify(registros, null, 2)); // <-- Agrega esto

    return registros.map((reg: any) => ({
      id: reg._id,
      no: reg.no_registro,
      hc: reg.historiaClinica?.ci,
      desecho: 'Bolsa',
      motivo_desecho: reg.motivo_desecho,
      sexo: reg.historiaClinica?.sexo,
      edad: reg.historiaClinica?.edad,
      grupo: reg.examenP_grupo,
      factor: reg.examenP_factor,
      volumen: reg.volumen,
      estado: reg.estado,
      entidad: 'Banco de Sangre',
    }));
  }

  async getDonantesQuePuedenDonar() {
    const hoy = new Date();

    // Busca todos los registros con la info necesaria
    const registros = await this.registroDonacionModel
      .find()
      .populate(
        'historiaClinica',
        'ci nombre primer_apellido segundo_apellido sexo',
      )
      .populate(
        'componente',
        'nombreComponente diasEsperaMasculino diasEsperaFemenino',
      )
      .exec();

    // Filtra los que ya pueden donar según la fecha y el sexo
    const donantes = registros.filter((reg: any) => {
      if (!reg.fechaR || !reg.componente) return false;
      const fechaUltima = new Date(reg.fechaR);
      const sexo = reg.historiaClinica?.sexo;
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

    // Devuelve los datos que necesites
    return donantes.map((reg: any) => ({
      id: reg._id,
      ci: reg.historiaClinica?.ci,
      nombre: reg.historiaClinica?.nombre,
      primer_apellido: reg.historiaClinica?.primer_apellido,
      segundo_apellido: reg.historiaClinica?.segundo_apellido,
      sexo: reg.historiaClinica?.sexo,
      componente: reg.componente?.nombreComponente,
      fechaUltimaDonacion: reg.fechaR,
      fechaPermitida: (() => {
        const fechaUltima = new Date(reg.fechaR);
        const sexo = reg.historiaClinica?.sexo;
        let diasEspera = 0;
        if (sexo === 'M') diasEspera = reg.componente.diasEsperaMasculino || 0;
        if (sexo === 'F') diasEspera = reg.componente.diasEsperaFemenino || 0;
        fechaUltima.setDate(fechaUltima.getDate() + diasEspera);
        return fechaUltima;
      })(),
    }));
  }

  async getConsecutivoAndHistoriaClinicaAceptada() {
    const registros = await this.registroDonacionModel
      .find()
      .populate('historiaClinica', 'no_hc')
      .populate('estado', 'nombre_estado')
      .exec();

    // Filtra los que tienen estado "aceptada"
    const filtrados = registros.filter(
      (reg: any) => reg.estado?.nombre_estado?.toLowerCase() === 'aceptada',
    );

    return filtrados.map((reg: any) => ({
      _id: reg._id,
      historiaClinica: reg.historiaClinica,
      estado: {
        nombre_estado: reg.estado?.nombre_estado || '',
      },
    }));
  }
}
