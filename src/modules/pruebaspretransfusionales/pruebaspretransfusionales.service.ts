import { Injectable } from '@nestjs/common';
import { CreatePruebaspretransfusionaleDto } from './dto/create-pruebaspretransfusionale.dto';
import { UpdatePruebaspretransfusionaleDto } from './dto/update-pruebaspretransfusionale.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { pruebaspretransfusionales } from './schema/pruebaspretransfusionales.schema';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class PruebaspretransfusionalesService {

  constructor(@InjectModel(pruebaspretransfusionales.name) private pruebaspretransfusionalesmodel: Model<pruebaspretransfusionales>) { }

  async create(createPruebaspretransfusionaleDto: CreatePruebaspretransfusionaleDto): Promise<pruebaspretransfusionales | {message:string}> {
    const existpruebapretransfusional = await this.pruebaspretransfusionalesmodel.findOne({ codigo_bolsa: createPruebaspretransfusionaleDto.codigo_bolsa });
    if (existpruebapretransfusional) {
      return {message: "Ya existe"};
    }
    const nuevaPruebapretransfusional = new this.pruebaspretransfusionalesmodel(createPruebaspretransfusionaleDto);
    nuevaPruebapretransfusional.save();
    return {message: "Creada exitosamente"};
  }

  async findAll():Promise<pruebaspretransfusionales[]|{message:string}> {
    const pruebaspretransfusional = await this.pruebaspretransfusionalesmodel.find().exec();
    if (pruebaspretransfusional.length===0) {return  {message: "No se han realizado pruebas pre transfusionales"}}
    return pruebaspretransfusional;
  }

  async findOne(codigo_bolsa:string) {
    const pruebaspretransfusional = this.pruebaspretransfusionalesmodel.findOne({ codigo_bolsa }).exec();
        if (!pruebaspretransfusional) {
          throw new ConflictException(`No existe bolsa con el codigo ${codigo_bolsa}`);
        }
        return this.pruebaspretransfusionalesmodel.findOne({ codigo_bolsa });
  }

  async update(codigo_bolsa:string, updatePruebaspretransfusionaleDto: UpdatePruebaspretransfusionaleDto):Promise<pruebaspretransfusionales|{message:string}> {
    const existpruebapretransfusional = await this.pruebaspretransfusionalesmodel.findOne({ codigo_bolsa: updatePruebaspretransfusionaleDto.codigo_bolsa });
    if(!existpruebapretransfusional){return {message:"No existe la prueba pretransfusional"}}
    if(updatePruebaspretransfusionaleDto.codigo_bolsa){
      const existpruebapretransfusionalnueva = await this.pruebaspretransfusionalesmodel.findOne({ codigo_bolsa: updatePruebaspretransfusionaleDto.codigo_bolsa });
      if(existpruebapretransfusionalnueva){return {message:"Ya existe una prueba pretransfusional con este codigo"}}
    }
    await this.pruebaspretransfusionalesmodel.updateOne({ codigo_bolsa }, updatePruebaspretransfusionaleDto);
    return {message:"Prueba actualizada exitosamente"}
  }

  async remove(codigo_bolsa:string):Promise<pruebaspretransfusionales|{ message:string}> {
    const existpruebapretransfusional = await this.pruebaspretransfusionalesmodel.findOne({ codigo_bolsa });
    if(! existpruebapretransfusional){return {message:"No existe la prueba pretransfusional"}}
    await this.pruebaspretransfusionalesmodel.deleteOne({ codigo_bolsa });
    return {message:"Prueba eliminada exitosamente"};
  }
}
