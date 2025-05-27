import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAntecedentesPersonaleDto } from './dto/create-antecedentes_personale.dto';
import { UpdateAntecedentesPersonaleDto } from './dto/update-antecedentes_personale.dto';
import { Model } from 'mongoose';
import { AntecedentesPersonales } from './schema/antecedentes_personales.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AntecedentesPersonalesService {
  constructor(@InjectModel(AntecedentesPersonales.name)private antecedentesPersonalesModel:Model<AntecedentesPersonales>){
    }

 //Metodo CREAR
  async create(createAntecedentesPersonaleDto: CreateAntecedentesPersonaleDto): Promise<AntecedentesPersonales | {message:string}> {
    const existAntecedentesPersonales = await this.antecedentesPersonalesModel.findOne({ id_antecedente: createAntecedentesPersonaleDto.id_antecedente});

    if(existAntecedentesPersonales){
      return {message: "Ya existe este antecedente"}
    }
    const nuevoAntecedente = new this.antecedentesPersonalesModel(createAntecedentesPersonaleDto);
    nuevoAntecedente.save();
    return {message: "El antecedente fue creado exitosamente"}
  }
 
//Metodo RETORNAR TODO
  async findAll(): Promise<AntecedentesPersonales[] | {message:string}> {
    return this.antecedentesPersonalesModel.find()
  }
 
 //Metodo RETORNAR UNO
  async findOne(id: string): Promise<AntecedentesPersonales | {message:string}> {
    const antP = await this.antecedentesPersonalesModel.findById({id}).exec();
    if(!antP){
      return {message: 'No existe el antecedente'}
    }
    return antP;
  }
 
  //Metodo ACTUALIZAR
    async update(id: string, UpdateAntecedentesPersonaleDto: UpdateAntecedentesPersonaleDto): Promise<AntecedentesPersonales | {message:string}> {
      const updateAntecedente = await this.antecedentesPersonalesModel.findByIdAndUpdate(id, UpdateAntecedentesPersonaleDto, {new:true}).exec();
      if(!updateAntecedente){
        return {message: `No existe el antecedente ${id}`}
      }
      return updateAntecedente;
    }
  
  //Metodo ELIMINAR
    async remove(id: string): Promise<AntecedentesPersonales | {message:string}> {
      const deleteAntecedente = await this.antecedentesPersonalesModel.findByIdAndDelete(id);
      if(!deleteAntecedente){
        return {message:"El antecedente no existe"}
      }
      return deleteAntecedente;
    }

 
}
