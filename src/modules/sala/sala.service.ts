
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { Sala } from './schema/sala';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class SalaService {

constructor(@InjectModel(Sala.name)private salaModel:Model<Sala>)
{
}

 //Metodo CREAR
 async create(
  CreateSalaDto: CreateSalaDto,
 ): Promise<Sala | { message: string}> {
  const existSala = await this.salaModel.findOne({
    id_orden: CreateSalaDto.nombre_sala,
  });

  if (existSala) {
    return { message: 'Ya existe'};
  }
  const nuevasala = new this.salaModel(CreateSalaDto);
  nuevasala.save();
  return { message: 'la sala se creo exitosamente'};


 }


 //Metodo para RETORNAR TODAS LAS SALAS
  async findAll(): Promise<Sala[] | { message: string}>  {
    return this.salaModel.find();
  }

  //Metodo para RETORNAR UNA SALA
  async findOne(id: string) {
    const sal = await this.salaModel.findOne({ id }).exec();
    if (!sal){
      throw new ConflictException('no existe la sala ${id}'); //made
    }
    return sal;
  }

 //Metodo para ACTUALIZAR las salas

  async update(
    id: string, 
    UpdateSalaDto: UpdateSalaDto,
  ): Promise<Sala | {massage: string }>  {
    const updatesal = await this.salaModel //made
    .findByIdAndUpdate(id, UpdateSalaDto, {new:true})
    .exec();

    if(!updatesal){
      return {massage: 'no existe la sala ${id}  '};
    }
    return updatesal;
  }


//Metodo para ELIMINAR una orden de transfusion 
  async remove(id: string): Promise<Sala | {message: string}> {
    const deletesal= await this.salaModel.findByIdAndDelete(id);

    if(!deletesal){
      return {message: 'la sala no existe'};
    }
    return deletesal;
  }



}
