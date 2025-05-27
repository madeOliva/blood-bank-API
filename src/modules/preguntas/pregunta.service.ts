import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pregunta } from './schema/pregunta.schema';
import { Model } from 'mongoose';


@Injectable()
export class PreguntaService {

  constructor(
    @InjectModel(Pregunta.name) private preguntaModel: Model<Pregunta>
  ) { }

  //METODO CREAR
  async create(createPreguntaDto: CreatePreguntaDto): Promise<Pregunta | { message: string }> {
    const existPregunta = await this.preguntaModel.findOne({ pregunta: createPreguntaDto.pregunta });

    if (existPregunta) {
      return { message: "Ya existe la pregunta" }
    }
    const nuevaPregunta = new this.preguntaModel(createPreguntaDto);
    nuevaPregunta.save();
    return { message: "La pregunta fue creada exitosamente" }
  }


  //Metodo retornar todas las preguntas
  async findAll(): Promise<Pregunta[] | { message: string }> {
    return this.preguntaModel.find()
  }

  //Metodo para retornar una pregunta.
  async findOne( pregunta:string) {
    const preg = await this.preguntaModel.findOne({pregunta}).exec();
    if (!preg) {
      throw new ConflictException(`No existe la pregunta ${pregunta}`)
    }
  
    return this.preguntaModel.findOne({pregunta});
  }

  //Metodo para actualizar las preguntas
  async update(id: string, UpdatePreguntaDto: UpdatePreguntaDto): Promise<Pregunta | { message: string }> {
    const updatepreg = await this.preguntaModel.findByIdAndUpdate(id, UpdatePreguntaDto, {new:true}).exec();

    if (!updatepreg) {
      return { message: `No existe la pregunta ${id}` }
    }

    return updatepreg;

  }

  //Metodo para eliminar una pregunta.
  async remove(id: string): Promise<Pregunta | { message: string }> {
    const deletepreg = await this.preguntaModel.findByIdAndDelete(id);

    if (!deletepreg) {
      return { message: "La pregunta no existe" }
    }

    return deletepreg;
  }

}
