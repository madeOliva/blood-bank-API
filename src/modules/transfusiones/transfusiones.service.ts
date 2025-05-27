import { ConflictException, Injectable } from '@nestjs/common';
import { CreateTransfusionesDto } from './dto/create-transfusiones.dto';
import { UpdateTransfusionesDto } from './dto/update-transfusiones.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Transfusiones } from './schema/transfusiones';
import { Model } from 'mongoose';


@Injectable()
export class TransfusionesService {

  constructor(@InjectModel(Transfusiones.name) private transfusionesModel: Model<Transfusiones>) {
  }

  //Metodo CREAR
  async create(
    CreateTransfusionesDto: CreateTransfusionesDto,
  ): Promise<Transfusiones | { message: string }> {
    const existTransfusiones = await this.transfusionesModel.findOne({
      id_orden: CreateTransfusionesDto.id_orden,
    });

    if (existTransfusiones) {
      return { message: 'Ya existe' };
    }
    const nuevatransfusiones = new this.transfusionesModel(CreateTransfusionesDto);
    nuevatransfusiones.save();
    return { message: 'la orden se creo exitosamente' };


  }

  //Metodo para RETORNAR TODAS LAS ORDENES DE TRANSFUSIONES
  async findAll(): Promise<Transfusiones[] | { message: string }> {
    return this.transfusionesModel.find();
  }

  //Metodo para RETORNAR UNA ORDEN DE TRANSFUSION
  async findOne(id: string) {
    const transf = await this.transfusionesModel.findOne({ id }).exec();
    if (!transf) {
      throw new ConflictException('no existe la orden de transfusion ${id}'); //made
    }
    return transf;
  }

  //Metodo para ACTUALIZAR las ordenes de transfusion

  async update(
    id: string,
    updateTransfusionesDto: UpdateTransfusionesDto,
  ): Promise<Transfusiones | { massage: string }> {
    const updatetransf = await this.transfusionesModel //made
      .findByIdAndUpdate(id, UpdateTransfusionesDto, { new: true })
      .exec();

    if (!updatetransf) {
      return { massage: 'no existe la orden de transfusion ${id}  ' };
    }
    return updatetransf;
  }


  //Metodo para ELIMINAR una orden de transfusion 
  async remove(id: string): Promise<Transfusiones | { message: string }> {
    const deletetransf = await this.transfusionesModel.findByIdAndDelete(id);

    if (!deletetransf) {
      return { message: 'la orden de transfusion no existe' };
    }
    return deletetransf;
  }
}
