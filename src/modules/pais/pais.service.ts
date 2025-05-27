import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePaiDto } from './dto/create-pai.dto';
import { UpdatePaiDto } from './dto/update-pai.dto';
import { Model } from 'mongoose';
import { Pais } from './schema/pais.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PaisService {
  constructor(@InjectModel(Pais.name)private paisModel:Model<Pais>){
   }


   //Metodo CREAR
  async create(createPaiDto: CreatePaiDto): Promise<Pais | {message:string}> {
    const existPais = await this.paisModel.findOne({id_pais: createPaiDto.id_pais});
    if(existPais){
      return {message: "Ya existe el pais"}
    }
    const nuevoPais = new this.paisModel(createPaiDto);
    nuevoPais.save();
    return {message: "El pais fue creado exitosamente"}
  }


  //Metodo RETORNAR TODO
  async findAll(): Promise<Pais[] | {message:string}> {
    return this.paisModel.find()
  }


  //Metodo RETORNAR UNO
  async findOne(id: string): Promise<Pais | {message:string}> {
    const pai = await this.paisModel.findById({id}).exec();
    if(!pai){
      return {message: 'No existe el pais'}
    }
    return pai;
  }


  //Metodo Actualizar
  async update(id: string, updatePaiDto: UpdatePaiDto): Promise<Pais | {message:string}> {
    const updatePais = await this.paisModel.findByIdAndUpdate(id, UpdatePaiDto, {const:true}).exec();
    if(!updatePais){
      return {message: `La causa ${id} no existe`}
    }
    return updatePais;
  }


  //Metodo ELIMINAR
  async remove(id: string): Promise<Pais | {message:string}> {
    const deletePais = await this.paisModel.findByIdAndDelete(id);
    if(!deletePais){
      return {message:"El pais no existe"}
    }
    return deletePais;
  }
}
