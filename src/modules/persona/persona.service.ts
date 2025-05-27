import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Persona } from './schema/persona.schema';


@Injectable()
export class PersonaService {
  constructor(@InjectModel(Persona.name) private personaModel: Model<Persona>) {

  }

  // Metodo Crear
  async create(createPersonaDto: CreatePersonaDto): Promise<Persona | { message: string }> {
    const existPersona = await this.personaModel.findOne({ ci: createPersonaDto.ci });
    if (existPersona) {
      return { message: "Esa persona ya existe" }
    }
    const nuevaPersona = new this.personaModel(createPersonaDto);
    nuevaPersona.save();
    return { message: "La persona fue creada exitosamente" }
  }

  //Método para retornar las personas

  async findAll(): Promise<Persona[] | { message: string }> {
    return this.personaModel.find();
  }

  async findOne(id: string): Promise<Persona | { message: string }> {
    const persona = await this.personaModel.findById({ id }).exec();
    if (!persona) {
      return { message: "No existe la persona" }
    }
    return persona
  }

  // Método para actualizar las preguntas
  async update(id: string, UpdatePersonaDto: UpdatePersonaDto): Promise<Persona | { message: string }> {
    const updatePersona = await this.personaModel.findByIdAndUpdate(id, UpdatePersonaDto, { new: true }).exec();
    if (!updatePersona) {
      return { message: `No existe la persona ${id}` }
    }
    return updatePersona

  }

  //Método para eliminar una persona

  async remove(id: string): Promise<Persona | { message: string }> {
    const deletePersona = await this.personaModel.findByIdAndDelete(id);
    if (!deletePersona) {
      return { message: "Esta persona no existe" }
    }
    return deletePersona;
  }

 async getPersonas() {
    return this.personaModel.find()
      .select('_id ci nombre primer_apellido segundo_apellido')
      .lean() 
      .exec();
  }
}

