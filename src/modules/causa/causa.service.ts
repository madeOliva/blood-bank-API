import { Injectable } from '@nestjs/common';
import { CreateCausaDto } from './dto/create-causa.dto';
import { UpdateCausaDto } from './dto/update-causa.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Causa } from './schema/causa.schema';

@Injectable()
export class CausaService {
  
  constructor(@InjectModel(Causa.name)private causaModel: Model<Causa>){
        }

//Metodo crear.
  async create(createCausaDto: CreateCausaDto): Promise<Causa | {message: string}> {
    const existCausa = await this.causaModel.findOne({ id_causa: createCausaDto.id_causa});

    if (existCausa){
     return { message:"Ya existe la causa" }
    }
    const nuevaCausa = new this.causaModel(createCausaDto);
    nuevaCausa.save();
    return { message: "La causa fue creada correctamente"}
  }


//Metodo retornar todas las causas.
 async findAll(): Promise<Causa[] | { message: string}> {
  return this.causaModel.find()
 }

//Metodo retornar una causas.
 async findOne(id:string): Promise<Causa | { message: string}> {
  const caus = await this.causaModel.findById({id}).exec();
  if (!caus){
    return {message:'No existe la causa'}
  }
  return caus;
 }


//Metodo para actualizar las causas
async update( id: string, UpdateCausaDto: UpdateCausaDto): Promise<Causa | { message: string}> {
  const updatecaus = await this.causaModel.findByIdAndUpdate(id, UpdateCausaDto, {new :true}).exec();

  if (!updatecaus) {
    return{ message: `La causa ${id} no existe`}
  }
  return updatecaus;
}
 
//Metodo para eliminar una causa.
async remove(id: string): Promise<Causa | {message: string}>{
  const deletecaus = await this.causaModel.findByIdAndDelete(id);

  if (!deletecaus) {
    return { message:"La causa no existe"}
  }
  return deletecaus;
}
}