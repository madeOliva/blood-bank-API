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
import { Persona } from '../persona/schema/persona.schema';
import { RegistroDonacion } from './schemas/registro_donacion.schema';
import { Donacion } from '../donacion/schemas/donacion.schemas';
import { Componentes } from '../componentes_donacion/schemas/componentes.schemas';


@Injectable()
export class RegistroDonacionService {
  constructor(
    @InjectModel(RegistroDonacion.name)
    private registroDonacionModel: Model<RegistroDonacion>,
    // @InjectModel(Persona.name)
    // private personaModel: Model<Persona>,
    @InjectModel(Historia_Clinica.name)
    private historiaclinicaModel: Model<Historia_Clinica>,
    @InjectModel(Donacion.name)
    private donacionModel: Model<Donacion>,
    @InjectModel(Componentes.name)
    private componentesModel: Model<Componentes>,
  ) { }

  async getOne(id: string) {
    const registro = await this.registroDonacionModel.findById(id).populate('componente').lean();
    if (!registro) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    return registro;
  }



  async create(ci: string, createDto: CreateRegistroDonacionesDto) {
    

    try {
      const historia = await this.historiaclinicaModel.findOne({ ci });
      const fechaActual = new Date();
      const componente = await this.componentesModel.findById(
        createDto.componente,
      );
      if (!componente) {
        throw new NotFoundException('Componente no encontrado');
      }
      const siglasComponente = componente.siglas;
      const numeroHC = ci;
      const anio = new Date().getFullYear();
      const numeroConsecutivo =
        (await this.registroDonacionModel.countDocuments({
          fechaR: {
            $gte: new Date(`${anio}-01-01T00:00:00.000Z`),
            $lte: new Date(`${anio}-12-31T23:59:59.999Z`),
          },
        })) + 1;
      const no_registro = `${siglasComponente}-${numeroHC}.${anio}.${numeroConsecutivo}`;

      if (!historia) {
        const newRegistro = new this.registroDonacionModel({
          ...createDto,
          fechaR: fechaActual,
          no_registro,
          ci_donante: ci, // Asegúrate de que este campo exista en tu esquema
        });
        return newRegistro.save();
      } else {
        const sexo = historia.sexo;
        const ultimaDonacion = await this.donacionModel
          .findOne({
            historia: historia._id,
          })
          .sort({ fecha: -1 });

        if (ultimaDonacion) {
          const ultimaFecha = new Date(ultimaDonacion.fecha);
          const diasDiferencia =
            (fechaActual.getTime() - ultimaFecha.getTime()) /
            (1000 * 60 * 60 * 24);

          const diasEsperaMasculino =
            ultimaDonacion.componente.diasEsperaMasculino;
          const diasEsperaFemenino = ultimaDonacion.componente.diasEsperaFemenino;
          const nombreComponente = ultimaDonacion.componente.nombreComponente;

          if (sexo === 'M' && diasEsperaMasculino < diasDiferencia) {
            throw new ConflictException(
              `Debe esperar al menos ${diasEsperaMasculino}  días entre donaciones de ${nombreComponente} para el sexo masculino. Última donación: ${ultimaFecha.toLocaleDateString()}`,
            );
          }
          if (sexo === 'F' && diasEsperaFemenino < diasDiferencia) {
            throw new ConflictException(
              `Debe esperar al menos ${diasEsperaFemenino}  días entre donaciones de ${nombreComponente} para el sexo femenino. Última donación: ${ultimaFecha.toLocaleDateString()}`,
            );
          }
        }
        const newRegistro = new this.registroDonacionModel({
          ...createDto,
          historiaClinica: historia._id,
          fechaR: fechaActual,
          no_registro,
          ci: ci, // Asegúrate de que este campo exista en tu esquema
        });
        return newRegistro.save();
      }
    } catch (error) {
      console.error("Error al crear registro de donacion", error)
      throw error;
    }
  }


  async findByRangoFechas(fechaInicio: Date, fechaFin: Date) {
  try {
    const registros = await this.registroDonacionModel
      .find({
        fechaR: { $gte: fechaInicio, $lte: fechaFin }
      })
      .populate('historiaClinica')
      .populate('componente') // Puedes dejarlo si tienes referencias válidas
      .exec();

    // Mapea solo los campos que existen en tus documentos
    return registros.map((reg: any) => ({
      id: reg._id,
      NoRegistro: reg.no_registro,
      fechaR: reg.fechaR,
      ci_donante: reg.ci_donante || '', // Si es ObjectId, solo mostrará el id
      
      // Si quieres mostrar campos de historiaClinica, valida que exista:
      nombre: reg.historiaClinica ? `${reg.historiaClinica.nombre || ''} ${reg.historiaClinica.primer_apellido || ''} ${reg.historiaClinica.segundo_apellido || ''}`.trim() : '',
      edad: reg.historiaClinica?.edad || '',
      sexo: reg.historiaClinica?.sexo || '',
      grupo: reg.historiaClinica?.grupo_sanguine || '',
      rh: reg.historiaClinica?.factor || '',
      donante: reg.componente?.nombreComponente || '',
      // ...agrega aquí más campos directos si los necesitas...
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
      .populate('persona', 'ci nombre primer_apellido segundo_apellido edad sexo')
      .populate('historiaClinica', 'grupo_sanguine factor donante_de')
      .exec();

    return registros.map((reg: any) => ({
      _id: reg._id,
      persona: reg.persona,
      historiaClinica: reg.historiaClinica,
    }));
  }

  async getDatosCompletos() {
    const registros = await this.registroDonacionModel
      .find()
      .populate('persona', 'nombre primer_apellido segundo_apellido')
      .exec();

    if (!registros) throw new NotFoundException('Registro no encontrado');

    return registros.map((reg: any) => ({
      nombre: reg.persona?.nombre,
      primer_apellido: reg.persona?.primer_apellido,
      segundo_apellido: reg.persona?.segundo_apellido,
      examenP_grupo: reg.examenP_grupo,
      examenP_factor: reg.examenP_factor,
      examenP_hemoglobina: reg.examenP_hemoglobina,
      apto_prechequeo: reg.apto_prechequeo === true
        ? "Apto"
        : reg.apto_prechequeo === false
          ? "No Apto"
          : "",
    }));
  }

  async getDonantesNoAptos() {
    // Busca todos los registros donde apto_interrogatorio es false
    const registros = await this.registroDonacionModel
      .find({ apto_interrogatorio: false })
      .populate('persona', 'ci nombre primer_apellido segundo_apellido')
      .exec();

    // Devuelve CI y observación (ajusta el campo de observación según tu modelo)
    return registros.map((reg: any) => ({
      ci: reg.persona?.ci || reg.ci,
      nombre: reg.persona?.nombre,
      primer_apellido: reg.persona?.primer_apellido,
      segundo_apellido: reg.persona?.segundo_apellido,
      observacion_interrogatorio: reg.observacion_interrogatorio || "No Observación",
    }));
  }

  async getDonacionesDiarias() {
    const registros = await this.registroDonacionModel
      .find()
      .populate('persona', 'sexo edad')
      .populate('historiaClinica', 'no_hc')
      .exec();

    return registros.map((reg: any) => ({
      id: reg._id,
      no_hc: reg.historiaClinica.no_hc,
      sexo: reg.persona?.sexo,
      edad: reg.persona?.edad,
      examenP_grupo: reg.examenP_grupo,
      examenP_factor: reg.examenP_factor,
      entidad: "Banco de Sangre", // Valor por defecto
    }));
  }
}