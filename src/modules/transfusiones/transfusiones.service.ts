import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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

  //Metodo para buscar por el carnet de identidad
  async findOneByCi(ci: string) {
    const transf = await this.transfusionesModel.findOne({ ci }).exec();
    if (!transf) {
      throw new ConflictException(`No existe una orden de transfusión para el CI ${ci}`);
    }
    return transf;
  }

  //Metodo para buscar una orden de transfusion por el nombre y los apellidos
  async findByNombreCompleto(nombre: string, primerApellido: string, segundoApellido: string) {
    const transf = await this.transfusionesModel.findOne({
      Nombre: nombre,
      PApellido: primerApellido,
      SApellido: segundoApellido,
    }).exec();

    if (!transf) {
      throw new ConflictException(`No existe la orden de transfusión para ${nombre} ${primerApellido} ${segundoApellido}`);
    }
    return transf;
  }

  //Metodo para ACTUALIZAR las ordenes de transfusion
  // En el servicio
  async updateByIdOrden(idOrden: number, updateTransfusionDto: UpdateTransfusionesDto) {
    const updated = await this.transfusionesModel.findOneAndUpdate(
      { id_orden: idOrden }, // Busca por el campo id_orden
      updateTransfusionDto,
      { new: true }
    ).exec();

    if (!updated) {
      throw new NotFoundException(`Orden con número ${idOrden} no encontrada`);
    }
    return updated;
  }


  //Metodo para ELIMINAR una orden de transfusion 
  async remove(id_orden: string): Promise<Transfusiones | { message: string }> {
    const deletetransf = await this.transfusionesModel.findByIdAndDelete(id_orden);

    if (!deletetransf) {
      return { message: 'la orden de transfusion no existe' };
    }
    return deletetransf;
  }

  async removeByOrden(id_orden: string) {
    return this.transfusionesModel.deleteMany({ id_orden });
  }

  // transfusiones.service.ts

  async removeByCI(ci: string): Promise<Transfusiones | { message: string }> {
    const deletetransf = await this.transfusionesModel.findOneAndDelete({ CI: ci });

    if (!deletetransf) {
      return { message: 'No se encontró orden de transfusión para este CI' };
    }
    return deletetransf;
  }

}


