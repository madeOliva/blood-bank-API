import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCentrifugacionDto } from './dto/create-centrifugacion.dto';
import { UpdateCentrifugacionDto } from './dto/update-centrifugacion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Centrifugacion } from './schema/centrifugacion.schema';
import { Historia_Clinica } from '../historia_clinica/schema/historia_clinica.schema';
import { RegistroDonacion } from '../registro_donacion/schemas/registro_donacion.schema';
@Injectable()
export class CentrifugacionService {
  constructor(
    @InjectModel(Centrifugacion.name)private centrifugacionModel: Model<Centrifugacion>,
    @InjectModel(Historia_Clinica.name) private historiaClinicaModel: Model<Historia_Clinica>,
    @InjectModel(RegistroDonacion.name) private registroDonacionModel: Model<RegistroDonacion>

  ){
  }

 //Metodo crear una centrifugacion.
async create(createCentrifugacionDto: CreateCentrifugacionDto): Promise<Centrifugacion | { message: string }> {
  // Busca la historia clínica y el registro de donación por el dato que recibes (por ejemplo, no_hc)
  const historia = await this.historiaClinicaModel.findOne({ no_hc: createCentrifugacionDto.no_hc });
  const registro = await this.registroDonacionModel.findOne({ no_hc: createCentrifugacionDto.no_hc });

  if (!historia || !registro) {
    return { message: "No existe la historia clínica o el registro de donación para ese no_hc" };
  }

  // Verifica si ya existe la centrifugación para esa historia clínica
  const existCentrifugacion = await this.centrifugacionModel.findOne({ historia_clinica: historia._id });
  if (existCentrifugacion) {
    return { message: "Ya existe la centrifugación de la bolsa" };
  }

  // Crea la centrifugación con las referencias y los demás campos del DTO
  const nuevaCentrifugacion = await this.centrifugacionModel.create({
    ...createCentrifugacionDto,
    historia_clinica: historia._id,
    registro_donacion: registro._id,
  });

  return nuevaCentrifugacion;
}


  /*} async create(createCentrifugacionDto: CreateCentrifugacionDto): Promise<Centrifugacion| {message: string}> {
     const existCentrifugacion= await this.centrifugacionModel.findOne({ centrifugacion: createCentrifugacionDto.no_hc});
     
     if (existCentrifugacion){
      return { message:"Ya existe la centrifugación de la bolsa" }
       
     }
     const nuevaCentrifugacion= new this.centrifugacionModel(createCentrifugacionDto);
     nuevaCentrifugacion.save();
     return{ message:"La cetrifugacion fue creada exitosamente"}
   }*/

   
 
 //Metodo retornar todas las centrifugaciones.

async findAll() {
  return this.centrifugacionModel
    .find()
    .populate('historia_clinica', 'no_hc sexo edad')
    .populate('registro_donacion', 'volumen examenP_grupo examenP_factor');
}

 /* async findAll(): Promise<Centrifugacion[] | { message: string}> {
   return this.centrifugacionModel.find()
  }*/
 
 //Metodo retornar una centrifugacion.
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
  
 //Metodo para eliminar una centrifugacion.
 async remove(id: string): Promise<Centrifugacion| {message: string}> {
   const deletecentrif = await this.centrifugacionModel.findByIdAndDelete({ id });
 
   if (!deletecentrif) {
     return{ message: "La centrifugación no existe"}
   }
   return deletecentrif;
 
  }
 }
