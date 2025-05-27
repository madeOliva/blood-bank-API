import { ConflictException, Injectable } from '@nestjs/common';
import { CreateSexoDto } from './dto/create-sexo.dto';
import { UpdateSexoDto } from './dto/update-sexo.dto';
import { Model} from 'mongoose';
import { InjectModel} from '@nestjs/mongoose';
import { Sexo } from './schema/sexo.schema';

@Injectable()
export class SexoService {
  constructor(@InjectModel(Sexo.name)private sexoModel:Model<Sexo>){
    
  }
  async create(createSexoDto: CreateSexoDto): Promise<Sexo | {message: string}> {
    const existSexo = await this.sexoModel.findOne({id: createSexoDto.id});
    if(existSexo){
     return {message: "Ya existe el sexo"}
    }
    const nuevoSexo = new this.sexoModel(createSexoDto);
    nuevoSexo.save();
    return { message: "El sexo fue creado exitosamente"}
  }
  
  async findAll(): Promise<Sexo[] | {message: string}> {
    return this.sexoModel.find();
  }

  async findOne(id: string): Promise<Sexo | {message: string}> {
    const sexo = await this.sexoModel.findById({id}).exec();
    if(!sexo){
      return {message: "No existe el sexo"}
    }
    return sexo
  }

  async update(id: string, UpdateSexoDto: UpdateSexoDto): Promise<Sexo | {message: string}> {
    const updateSexo = await this.sexoModel.findByIdAndUpdate(id, UpdateSexoDto, {new:true}).exec();
    if(!updateSexo){
      return {message: `No existe el sexo ${id}`}
    }
    return updateSexo
   
  }
  
 async remove(id: string): Promise<Sexo | {message: string}> {
  const deleteSexo = await this.sexoModel.findByIdAndDelete(id);
  if (!deleteSexo){
    return {message: "El sexo no existe"}
  }
  return deleteSexo;
  }
}
