import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePruebaspostransfusionaleDto } from './dto/create-pruebaspostransfusionale.dto';
import { UpdatePruebaspostransfusionaleDto } from './dto/update-pruebaspostransfusionale.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pruebasposttransfusionales } from './schema/pruebasposttransfusionales.schema';

@Injectable()
export class PruebaspostransfusionalesService {

  constructor(@InjectModel(Pruebasposttransfusionales.name) private Pruebasposttransfusionalesmodel: Model<Pruebasposttransfusionales>) { }

  async create(createPruebaspostransfusionaleDto: CreatePruebaspostransfusionaleDto): Promise<Pruebasposttransfusionales | { message: string }> {
    const existpruebapostransfusional = await this.Pruebasposttransfusionalesmodel.findOne({ codigo_bolsa: createPruebaspostransfusionaleDto.codigo_bolsa });
    if (existpruebapostransfusional) {
      return { message: "Ya existe" };
    }
    const nuevaPruebaposttransfusional = new this.Pruebasposttransfusionalesmodel(createPruebaspostransfusionaleDto);
    nuevaPruebaposttransfusional.save();
    return { message: "Creada exitosamente" };
  }

  async findAll(): Promise<Pruebasposttransfusionales[] | { message: string }> {
    const pruebasposttransfusional = await this.Pruebasposttransfusionalesmodel.find().exec();
    if (Pruebasposttransfusionales.length === 0) { return { message: "No se han realizado pruebas pre transfusionales" } }
    return pruebasposttransfusional;
  }

  findOne(codigo_bolsa: string) {
    const pruebasposttransfusional = this.Pruebasposttransfusionalesmodel.findOne({ codigo_bolsa }).exec();
    if (!pruebasposttransfusional) {
      throw new ConflictException(`No existe bolsa con el codigo ${codigo_bolsa}`);
    }
    return this.Pruebasposttransfusionalesmodel.findOne({ codigo_bolsa });
  }

  async update(codigo_bolsa:string, updatePruebaspostransfusionaleDto: UpdatePruebaspostransfusionaleDto):Promise<Pruebasposttransfusionales|{message:string}> {
    const existpruebapretransfusional = await this.Pruebasposttransfusionalesmodel.findOne({ codigo_bolsa: updatePruebaspostransfusionaleDto.codigo_bolsa });
    if(!existpruebapretransfusional){return {message:"No existe la prueba pretransfusional"}}
    if(updatePruebaspostransfusionaleDto.codigo_bolsa){
      const existpruebapretransfusionalnueva = await this.Pruebasposttransfusionalesmodel.findOne({ codigo_bolsa: updatePruebaspostransfusionaleDto.codigo_bolsa });
      if(existpruebapretransfusionalnueva){return {message:"Ya existe una prueba pretransfusional con este codigo"}}
    }
    await this.Pruebasposttransfusionalesmodel.updateOne({ codigo_bolsa }, updatePruebaspostransfusionaleDto);
    return {message:"Prueba actualizada exitosamente"}
  }

  async remove(codigo_bolsa:string) {
    const existpruebaposttransfusional = await this.Pruebasposttransfusionalesmodel.findOne({ codigo_bolsa });
    if(!existpruebaposttransfusional){return {message:"No existe la prueba pretransfusional"}}
    await this.Pruebasposttransfusionalesmodel.deleteOne({ codigo_bolsa });
    return {message:"Prueba eliminada exitosamente"};
  }
}
