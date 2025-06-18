import { Injectable } from '@nestjs/common';
import { CreateFactoresDto } from './dto/create-factore.dto';
import { UpdateFactoresDto } from './dto/update-factore.dto';
import { Factores } from './schemas/factore.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FactoresService {
  constructor(
    @InjectModel(Factores.name)
    private factoresModel: Model<Factores>,
  ) {}

  async create(
    createFactoreDto: CreateFactoresDto,
  ): Promise<Factores | { message: string }> {
    const existFactor = await this.factoresModel.findOne(createFactoreDto);
    if (existFactor) {
      return { message: 'Ya existe el factor' };
    }
    const nuevoFactor = new this.factoresModel(createFactoreDto);
    nuevoFactor.save();
    return { message: 'El factor fue creado exitosamente' };
  }

  findAll(): Promise<Factores[] | { message: string }> {
    return this.factoresModel.find();
  }

  async findOne(id: string): Promise<Factores | {message: string}> {
      const factor = await this.factoresModel.findById({id});
      if(!factor){
        return {message: "No existe el factor"};
      }
      return factor;
    }

  async update(id: string, updateFactoreDto: UpdateFactoresDto): Promise<Factores | {message: string}> {
      const updateFactor = await this.factoresModel.findByIdAndUpdate(id, UpdateFactoresDto, {new:true}).exec();
      if(!updateFactor){
        return {message: `No existe el factpr ${id}`};
      }
      return updateFactor;
     
    }

  async remove(id: string): Promise<Factores | {message: string}> {
    const deleteFactor = await this.factoresModel.findByIdAndDelete(id);
    if (!deleteFactor){
      return {message: "El Factor no existe"}
    }
    return deleteFactor;
    }
}
