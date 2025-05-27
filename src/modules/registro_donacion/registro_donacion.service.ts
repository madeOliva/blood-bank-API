import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateRegistroDonacionDto } from "./dto/update-registro_donacion.dto";
import { CreateRegistroDonacionesDto } from "./dto/create-registro_donacion.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Historia_Clinica } from "../historia_clinica/schema/historia_clinica.schema";
import { Persona } from "../persona/schema/persona.schema";
import { RegistroDonacion } from "./schemas/registro_donacion.schema";

@Injectable()
export class RegistroDonacionService {
  constructor(
    @InjectModel(RegistroDonacion.name)
    private registroDonacionModel: Model<RegistroDonacion>,
    @InjectModel(Persona.name)
    private personaModel: Model<Persona>,
    @InjectModel(Historia_Clinica.name)
    private historiaclinicaModel: Model<Historia_Clinica>,
  ) { }

  async getOne(id: string) {
    const registro = await this.registroDonacionModel.findById(id).exec();
    if (!registro) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    return registro;
  }

  async create(ci: string, createDto: CreateRegistroDonacionesDto) {
    // Buscar persona y historia clínica
    const persona = await this.personaModel.findOne({ ci });
    if (!persona) throw new NotFoundException(`Persona con ci ${ci} no encontrada`);

    const historia = await this.historiaclinicaModel.findOne({ ci });
    if (!historia) throw new NotFoundException(`Historia clínica para ci ${ci} no encontrada`);

    const newRegistro = new this.registroDonacionModel({
      ...createDto,
      persona: persona._id,
      historiaClinica: historia._id
    });

    return newRegistro.save();
  }

  async getAll(ci: string) {
    const persona = await this.personaModel.findOne({ ci });
    if (!persona) throw new NotFoundException(`Persona con ci ${ci} no encontrada`);

    return this.registroDonacionModel.find({ persona: persona._id })
      .populate('persona')
      .populate('historiaClinica')
      .exec();
  }

  async update(id: string, updateRegistroDonacionDto: UpdateRegistroDonacionDto) {
    const updatedRegistro = await this.registroDonacionModel
      .findByIdAndUpdate(id, updateRegistroDonacionDto, { new: true })
      .exec();

    if (!updatedRegistro) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    return updatedRegistro;
  }

  async delete(id: string) {
    const deletedRegistro = await this.registroDonacionModel.findByIdAndDelete(id).exec();
    if (!deletedRegistro) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    return deletedRegistro;
  }

  async getDatosCompletosDonacion(id: string) {
    // 1. Obtener el registro de donación
    const registro = await this.registroDonacionModel
      .findById(id)
      .populate('persona', ' ci nombre primer_apellido segundo_apellido')
      .lean()
      .exec();

    if (!registro) {
      throw new NotFoundException(`Registro de donación con ID ${id} no encontrado`);
    }

    // 2. Extraer los datos necesarios
    const datosPersona = {
      ci: registro.persona.ci,
      nombre: registro.persona.nombre,
      primer_apellido: registro.persona.primer_apellido,
      segundo_apellido: registro.persona.segundo_apellido
    };

    const datosRegistro = {
      _id: registro._id,
      examenP_grupo: registro.examenP_grupo,
      examenP_factor: registro.examenP_factor,
      examenP_hemoglobina: registro.examenP_hemoglobina,
      apto_prechequeo: registro.apto_prechequeo
    };

    // 3. Retornar la estructura combinada
    return {
      datosPersona,
      datosRegistro
    };
  }

}



