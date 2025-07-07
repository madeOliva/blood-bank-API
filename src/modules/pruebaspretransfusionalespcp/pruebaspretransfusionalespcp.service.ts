import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePruebaspretransfusionalespcpDto } from './dto/create-pruebaspretransfusionalespcp.dto';
import { UpdatePruebaspretransfusionalespcpDto } from './dto/update-pruebaspretransfusionalespcp.dto';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { pruebaspretransfusionalespcp } from './schemas/pruebaspretransfusionalespcp.schema';

@Injectable()
export class PruebaspretransfusionalespcpService {
  constructor(@InjectModel(pruebaspretransfusionalespcp.name) private pruebaspretransfusionalespcpbmodel: Model<pruebaspretransfusionalespcp>) { }

  async create(CreatePruebaspretransfusionalespcpDto: CreatePruebaspretransfusionalespcpDto): Promise<pruebaspretransfusionalespcp | { message: string }> {
    const existPruebaPrepcp = await this.pruebaspretransfusionalespcpbmodel.findOne({ pruebapretransfusionalesgr: CreatePruebaspretransfusionalespcpDto.codigo_bolsa });

    if (existPruebaPrepcp) { return { message: "Ya existe un registro de prueba" }; }
    const nuevoPruebaPrepcp = new this.pruebaspretransfusionalespcpbmodel(CreatePruebaspretransfusionalespcpDto);
    nuevoPruebaPrepcp.save();
    return { message: "Prueba guardada exitosamente" };
  }

  async findAll(): Promise<pruebaspretransfusionalespcp[] | { message: string }> {
    const PruebaPrepcp = await this.pruebaspretransfusionalespcpbmodel.find().exec();
    if (PruebaPrepcp.length === 0) { return { message: "No se han realizado pruebas pre transfusionales" } }
    return PruebaPrepcp;
  }

  async findOne(codigo_bolsa: String) {
    const pruebapcpbolsaSangre = this.pruebaspretransfusionalespcpbmodel.findOne({ codigo_bolsa }).exec();
    if (!pruebapcpbolsaSangre) {
      throw new ConflictException(`No existen registros de pruebas a la bolsa con el codigo ${codigo_bolsa}`);
    }
    return this.pruebaspretransfusionalespcpbmodel.findOne({ codigo_bolsa });
  }

  update(id: number, updatePruebaspretransfusionalespcpDto: UpdatePruebaspretransfusionalespcpDto) {
    return `This action updates a #${id} pruebaspretransfusionalespcp`;
  }

  async remove(codigo_bolsa: String): Promise<pruebaspretransfusionalespcp | { message: string }> {
    const eliminarPrueba = await this.pruebaspretransfusionalespcpbmodel.findOneAndDelete({ codigo_bolsa });
    if (!eliminarPrueba) return { message: "La prueba ha sido eliminada" };
    return eliminarPrueba;
  }
}
