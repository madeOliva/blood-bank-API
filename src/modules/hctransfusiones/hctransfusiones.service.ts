import { ConflictException, Injectable } from '@nestjs/common';
import { CreateHctransfusioneDto } from './dto/create-hctransfusione.dto';
import { UpdateHctransfusioneDto } from './dto/update-hctransfusione.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Hclinicatransfusiones } from './schema/hclinicatransfusiones.schema';
import { Model } from 'mongoose';

@Injectable()
export class HctransfusionesService {

  constructor(@InjectModel(Hclinicatransfusiones.name) private Hctransfusionesmodel: Model<Hclinicatransfusiones | { message: string }>) { }

  async create(createHctransfusioneDto: CreateHctransfusioneDto): Promise<Hclinicatransfusiones | { message: string }> {
    const existhctransfusiones = await this.Hctransfusionesmodel.findOne({ estado_transfusion: createHctransfusioneDto.estado_transfusion });
    if (existhctransfusiones) {
      return { message: "Ya existe" };
    }
    const nuevaHctransfusiones = new this.Hctransfusionesmodel(createHctransfusioneDto);
    nuevaHctransfusiones.save();
    return { message: "Creada exitosamente" };
  }

  async findAll(): Promise<Hclinicatransfusiones[] | { message: string }> {
    return this.Hctransfusionesmodel.find();
  }

  findOne(estado_transfusion: string) {
    const pruebaspretransfusional = this.Hctransfusionesmodel.findOne({ estado_transfusion }).exec();
    if (!pruebaspretransfusional) {
      throw new ConflictException(`No existe bolsa con el codigo ${estado_transfusion}`);
    }
    return this.Hctransfusionesmodel.findOne({ estado_transfusion });
  }

  async update(estado_transfusion: string, updateHctransfusioneDto: UpdateHctransfusioneDto): Promise<Hclinicatransfusiones | { message: string }> {
    const existhistoriaclinica = await this.Hctransfusionesmodel.findOne({ estado_transfusion: updateHctransfusioneDto.estado_transfusion });
    if (!existhistoriaclinica) { return { message: "No existe la prueba pretransfusional" } }
    if (updateHctransfusioneDto.estado_transfusion) {
      const existhistoriaclinicanueva = await this.Hctransfusionesmodel.findOne({ estado_transfusion: updateHctransfusioneDto.estado_transfusion });
      if (existhistoriaclinicanueva) { return { message: "Ya existe una prueba pretransfusional con este codigo" } }
    }
    await this.Hctransfusionesmodel.updateOne({ estado_transfusion }, updateHctransfusioneDto);
    return { message: "Prueba actualizada exitosamente" }
  }

  async remove(estado_transfusion) {
    const existpruebapretransfusional = await this.Hctransfusionesmodel.findOne({ estado_transfusion });
    if (!existpruebapretransfusional) { return { message: "No existe la prueba pretransfusional" } }
    await this.Hctransfusionesmodel.deleteOne({estado_transfusion });
    return { message: "Prueba eliminada exitosamente" };
  }
}
