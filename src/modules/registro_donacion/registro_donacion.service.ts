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
  ) { }

  async getOne(id: string) {
    const registro = await this.registroDonacionModel.findById(id).exec();
    if (!registro) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    return registro;
  }

  async create(ci: string, createDto: CreateRegistroDonacionesDto) {
    // Buscar persona y sexo
    const persona = await this.personaModel.findOne({ ci });
    if (!persona)
      throw new NotFoundException(`Persona con ci ${ci} no encontrada`);
    const sexo = persona.sexo;

    // Buscar historia clínica
    const historia = await this.historiaclinicaModel.findOne({ ci });
    if (!historia)
      throw new NotFoundException(
        `Historia clínica para ci ${ci} no encontrada`,
      );

    //Creando el no-registro
    const componente = await this.componentesModel.findById(
      createDto.componente,
    );
    if (!componente) {
      throw new NotFoundException('Componente no encontrado');
    }
    const siglasComponente = componente.siglas; // Aquí estan las siglas
    const numeroHC = historia.no_hc;
    const anio = new Date().getFullYear();
    const numeroConsecutivo =
      (await this.registroDonacionModel.countDocuments({
        fecha_registro: {
          $gte: new Date(`${anio}-01-01T00:00:00.000Z`),
          $lte: new Date(`${anio}-12-31T23:59:59.999Z`),
        },
      })) + 1;

    const no_registro = `${siglasComponente}-${numeroHC}.${anio}.${numeroConsecutivo}`;

    //Buscar ultima donacion
    const ultimaDonacion = await this.donacionModel
      .findOne({
        persona: persona._id,
      })
      .sort({ fecha: -1 });

    const fechaActual = new Date();

    if (ultimaDonacion) {
      const ultimaFecha = new Date(ultimaDonacion.fecha);
      const diasDiferencia =
        (fechaActual.getTime() - ultimaFecha.getTime()) / (1000 * 60 * 60 * 24);

      const diasEsperaMasculino = ultimaDonacion.componente.diasEsperaMasculino;
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
      persona: persona._id,
      historiaClinica: historia._id,
      fecha_registro: fechaActual,
      no_registro,
    });

    return newRegistro.save();
  }

  async getAll(ci: string) {
    const persona = await this.personaModel.findOne({ ci });
    if (!persona)
      throw new NotFoundException(`Persona con ci ${ci} no encontrada`);

    return this.registroDonacionModel
      .find({ persona: persona._id })
      .populate('persona')
      .populate('historiaClinica')
      .exec();


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

  async getDatosCompletos(){
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
}
