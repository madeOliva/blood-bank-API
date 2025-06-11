import { Injectable } from '@nestjs/common';
import { CreateColorPielDto } from './dto/create-color_piel.dto';
import { UpdateColorPielDto } from './dto/update-color_piel.dto';
import { Model} from 'mongoose';
import { InjectModel} from '@nestjs/mongoose';
import { ColorPiel } from './schema/color_piel.schema';


@Injectable()
export class ColorPielService {
  constructor(@InjectModel(ColorPiel.name)private color_pielModel:Model<ColorPiel>){
    
  }
  async create(createColorPielDto: CreateColorPielDto): Promise<ColorPiel | {message: string}> {
    const existColorPiel = await this.color_pielModel.findOne(createColorPielDto);
    if(existColorPiel){
     return {message: "Ya existe el color de piel"}
    }
    const nuevoColorPiel = new this.color_pielModel(createColorPielDto);
    nuevoColorPiel.save();
    return { message: "El color de piel fue creado exitosamente"}
  }

  async findAll(): Promise<ColorPiel[] | {message: string}> {
    return this.color_pielModel.find();
  }

  async findOne(id: string): Promise<ColorPiel | {message: string}> {
    const color_piel = await this.color_pielModel.findById({id}).exec();
    if(!color_piel){
      return {message: "No existe el color de piel"}
    }
    return color_piel
  }

  async update(id: string, UpdateColorPielDto: UpdateColorPielDto): Promise<ColorPiel | {message: string}> {
    const updateColorPiel = await this.color_pielModel.findByIdAndUpdate(id, UpdateColorPielDto, {new:true}).exec();
    if(!updateColorPiel){
      return {message: `No existe el color de piel ${id}`}
    }
    return updateColorPiel
   
  }


  async remove(id: string): Promise<ColorPiel | {message: string}> {
    const deleteColorPiel = await this.color_pielModel.findByIdAndDelete(id);
  if (!deleteColorPiel){
    return {message: "El color de piel no existe"}
  }
  return deleteColorPiel;
  }
}
