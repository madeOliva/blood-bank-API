import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePruebaspretransfusionalesgrDto } from './dto/create-pruebaspretransfusionalesgr.dto';
import { UpdatePruebaspretransfusionalesgrDto } from './dto/update-pruebaspretransfusionalesgr.dto';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { pruebaspretransfusionalesgr } from './schemas/pruebaspretransfusionalesgr.schema';


@Injectable()
export class PruebaspretransfusionalesgrService {
  constructor(@InjectModel(pruebaspretransfusionalesgr.name) private pruebaspretransfusionalesgrbmodel: Model<pruebaspretransfusionalesgr>) { }

  async create(CreatePruebaspretransfusionalesgrDto: CreatePruebaspretransfusionalesgrDto): Promise<pruebaspretransfusionalesgr | { message: string }> {
    const existPruebaPregr = await this.pruebaspretransfusionalesgrbmodel.findOne({ pruebapretransfusionalesgr: CreatePruebaspretransfusionalesgrDto.codigo_bolsa });

    if (existPruebaPregr) { return { message: "Ya existe un registro de prueba" }; }
    const nuevoPruebaPregr = new this.pruebaspretransfusionalesgrbmodel(CreatePruebaspretransfusionalesgrDto);
    nuevoPruebaPregr.save();
    return { message: "Prueba guardada exitosamente" };
  }

  async findAll(): Promise<pruebaspretransfusionalesgr[] | { message: string }> {
    const PruebaPregr = await this.pruebaspretransfusionalesgrbmodel.find().exec();
    if (PruebaPregr.length === 0) { return { message: "No se han realizado pruebas pre transfusionales" } }
    return PruebaPregr;
  }

  async findOne(codigo_bolsa: String) {
    const pruebagrbolsaSangre = this.pruebaspretransfusionalesgrbmodel.findOne({ codigo_bolsa }).exec();
    if (!pruebagrbolsaSangre) {
      throw new ConflictException(`No existen registros de pruebas a la bolsa con el codigo ${codigo_bolsa}`);
    }
    return this.pruebaspretransfusionalesgrbmodel.findOne({ codigo_bolsa });
  }

  update(id: number, updatePruebaspretransfusionalesgrDto: UpdatePruebaspretransfusionalesgrDto) {
    return `This action updates a #${id} pruebaspretransfusionalesgr`;
  }

  async remove(codigo_bolsa: String): Promise<pruebaspretransfusionalesgr | { message: string }> {
    const eliminarPrueba = await this.pruebaspretransfusionalesgrbmodel.findOneAndDelete({ codigo_bolsa });
    if (!eliminarPrueba) return { message: "La prueba ha sido eliminada" };
    return eliminarPrueba;
  }
}