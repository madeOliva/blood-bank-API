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
    @InjectModel(Persona.name)
    private personaModel: Model<Persona>,
    @InjectModel(Historia_Clinica.name)
    private historiaclinicaModel: Model<Historia_Clinica>,
    @InjectModel(Donacion.name)
    private donacionModel: Model<Donacion>,
    @InjectModel(Componentes.name)
    private componentesModel: Model<Componentes>,
  ) {}

  async getOne(id: string) {
    const registro = await this.registroDonacionModel.findById(id).exec();
    if (!registro) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    return registro;
  }

  async create(ci: string, createDto: CreateRegistroDonacionesDto) {
    // Buscar persona y sexo
    // const persona = await this.personaModel.findOne({ ci });
    // if (!persona) {
    //   //   throw new NotFoundException(`Persona con ci ${ci} no encontrada`);

    //   console.log('no se ha encontrado dicha persona en nuestro registro');
    // } else {
    
    try{
// Buscar historia clínica
    const historia = await this.historiaclinicaModel.findOne({ ci });
    const fechaActual = new Date();
    console.log(fechaActual);
    
    //Creando el no-registro
    const componente = await this.componentesModel.findById(
      createDto.componente,
    );
    if (!componente) {
      throw new NotFoundException('Componente no encontrado');
    }
    const siglasComponente = componente.siglas; // Aquí estan las siglas
    
    const numeroHC = ci;
    

    const anio = new Date().getFullYear();

    const numeroConsecutivo =
      (await this.registroDonacionModel.countDocuments({
        fecha_registro: {
          $gte: new Date(`${anio}-01-01T00:00:00.000Z`),
          $lte: new Date(`${anio}-12-31T23:59:59.999Z`),
        },
      })) + 1;

    const no_registro = `${siglasComponente}-${numeroHC}.${anio}.${numeroConsecutivo}`;

    if (!historia) {
      console.log(`Historia clínica para ci ${ci} no encontrada`);
      // Crear el registro de inscripción
      const newRegistro = new this.registroDonacionModel({
        ...createDto,
        //persona: persona._id,
        //historiaClinica: ci,
        fecha_registro: fechaActual,
        no_registro,
      });

      return newRegistro.save();
    } else {
      const sexo = historia.sexo;

      //Buscar ultima donacion
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
      // Crear el registro de inscripción
      const newRegistro = new this.registroDonacionModel({
        ...createDto,
        //persona: persona._id,
        historiaClinica: historia._id,
        fecha_registro: fechaActual,
        no_registro,
      });
      return newRegistro.save();

      

    }
    }catch(error){
      console.error("Error al crear registro de donacion" , error )
      throw error;
    }
  }

  async findAllDonation(): Promise<RegistroDonacion[] | {message: string}> {
    try{
    return this.registroDonacionModel.find();
    }catch(error){
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

  async getDatosCompletosDonacion(id: string) {
    // 1. Obtener el registro de donación
    const registro = await this.registroDonacionModel
      .findById(id)
      .populate('historia_clinica', ' ci nombre primer_apellido segundo_apellido')
      .lean()
      .exec();

    if (!registro) {
      throw new NotFoundException(
        `Registro de donación con ID ${id} no encontrado`,
      );
    }

    // 2. Extraer los datos necesarios
    const datosPersona = {
      ci: registro.historiaClinica.ci,
      nombre: registro.historiaClinica.nombre,
      primer_apellido: registro.historiaClinica.primer_apellido,
      segundo_apellido: registro.historiaClinica.segundo_apellido,
    };

    const datosRegistro = {
      _id: registro._id,
      examenP_grupo: registro.examenP_grupo,
      examenP_factor: registro.examenP_factor,
      examenP_hemoglobina: registro.examenP_hemoglobina,
      apto_prechequeo: registro.apto_prechequeo,
    };

    // 3. Retornar la estructura combinada
    return {
      datosPersona,
      datosRegistro,
    };
  }
}
