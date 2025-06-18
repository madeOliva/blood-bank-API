import { ConflictException, Injectable } from '@nestjs/common';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { Model } from 'mongoose';
import { Provincia } from './schema/provincia.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProvinciaService {
  constructor(@InjectModel(Provincia.name)private provinciaModel:Model<Provincia>){
  }


  //Metodo CREAR
  async create(createProvinciaDto: CreateProvinciaDto): Promise<Provincia | {message:string}> {
    const existProvincia = await this.provinciaModel.findOne({nombre_provincia: createProvinciaDto.nombre_provincia});
    if(existProvincia){
      return {message:"Ya existe la provincia"}
    }
    const nuevaProvincia = new this.provinciaModel(createProvinciaDto);
    
    return nuevaProvincia.save();
  }


  //Metodo RETORNAR TODO
  async findAll(): Promise<Provincia[] | {message:string}> {
    return this.provinciaModel.find()
  }


  //Metodo RETORNAR UNO
  async findOne(id: string): Promise<Provincia | {message:string}> {
    const prov = await this.provinciaModel.findById({id}).exec();
    if(!prov){
      return {message:'No existe la provincia'}
    }
    return prov;
  }


  //Metodo ACTUALIZAR
  async update(id: string, updateProvinciaDto: UpdateProvinciaDto): Promise<Provincia | {message:string}> {
    const updateProvincia = await this.provinciaModel.findByIdAndUpdate(id, UpdateProvinciaDto, {const:true}).exec();
    if(!updateProvincia){
      return{message:`La provincia ${id} no existe`}
    }
    return updateProvincia;
  }


  //Metodo ELIMINAR
  async remove(id: string): Promise<Provincia | {message:string}> {
    const deleteProvincia = await this.provinciaModel.findByIdAndDelete(id);
    if(!deleteProvincia){
      return{message:"La provincia no existe"}
    }
    return deleteProvincia;
  }
}
