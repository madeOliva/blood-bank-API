import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCentrifugacionDto } from './dto/create-centrifugacion.dto';
import { UpdateCentrifugacionDto } from './dto/update-centrifugacion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Centrifugacion } from './schema/centrifugacion.schema';

@Injectable()
export class CentrifugacionService {
  constructor(@InjectModel(Centrifugacion.name)private centrifugacionModel: Model<Centrifugacion>){
  }

 //Metodo crear.
   async create(createCentrifugacionDto: CreateCentrifugacionDto): Promise<Centrifugacion| {message: string}> {
     const existCentrifugacion= await this.centrifugacionModel.findOne({ centrifugacion: createCentrifugacionDto.no_centrifuga});
     
     if (existCentrifugacion){
      return { message:"Ya existe la centrifugación de la bolsa" }
       
     }
     const nuevaCentrifugacion= new this.centrifugacionModel(createCentrifugacionDto);
     nuevaCentrifugacion.save();
     return{ message:"La cetrifugacion fue creada exitosamente"}
   }

   
 
 //Metodo retornar todas las causas.
  async findAll(): Promise<Centrifugacion[] | { message: string}> {
   return this.centrifugacionModel.find()
  }
 
 //Metodo retornar una causas.
  async findOne(id:string): Promise<Centrifugacion | { message: string}>{
   const centrif = await this.centrifugacionModel.findById({id}).exec();
   if (!centrif){
    return {message: 'No existe la centrifugación'}
   }
   return centrif;
  }

 //Metodo para actualizar las centrifugaciones
 async update(id: string, updateCentrifugacionDto: UpdateCentrifugacionDto): Promise<Centrifugacion| {message: string}> {
   const updatecentrif = await this.centrifugacionModel.findOne({ id});
 
   if (!updatecentrif) {
     return { message: `La centrifugación ${id} no existe`}
   }
    return updatecentrif;
 }
  
 //Metodo para eliminar una pregunta.
 async remove(id: string): Promise<Centrifugacion| {message: string}> {
   const deletecentrif = await this.centrifugacionModel.findByIdAndDelete({ id });
 
   if (!deletecentrif) {
     return{ message: "La centrifugación no existe"}
   }
   return deletecentrif;
 
  }
 }
