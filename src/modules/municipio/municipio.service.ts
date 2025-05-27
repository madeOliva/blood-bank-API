import { ConflictException, Injectable } from '@nestjs/common';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Municipio } from './schema/municipio.schema';

@Injectable()
export class MunicipioService {

 constructor (
     @InjectModel(Municipio.name)
       private municipioModel: Model<Municipio>){}

   async create(CreateMunicipioDto: CreateMunicipioDto): Promise<Municipio | {message: string}> {
   const existMunicipio = await this.municipioModel.findOne({name: CreateMunicipioDto.name}
   );
   if (existMunicipio){
    return{message: "El municipio ya existe "}
   }
   const nuevaMunicipio = new this.municipioModel(CreateMunicipioDto);
   nuevaMunicipio.save();
   return  {message: "El municipio fue creado exitosamente"}
    }

 async findAll(): Promise<Municipio[] | {message: string}> {
    return this.municipioModel.find()
  }

  async findOne(municipio: string) {
     const muni = await this.municipioModel.findOne({municipio}).exec();
     if (!muni){
       throw new ConflictException(`No existe el municipio ${municipio}`)
     }
     return this.municipioModel.findOne({municipio});
   }

   
  async update(id: string, UpdateMunicipioDto: UpdateMunicipioDto): Promise<Municipio | {message: string}> {
     const updatemuni = await this.municipioModel.findByIdAndUpdate(id, UpdateMunicipioDto, {new:true}).exec();
 
     if(!updatemuni){
       return {message: `No existe el municipio ${id}`}
     }
     return updatemuni;
   }

 async remove(id: string): Promise<Municipio | {message: string}> {
     const deletemuni = await this.municipioModel.findByIdAndDelete(id);
 
     if (!deletemuni){
       return{ message: "El municipio no existe"}
     }
     return deletemuni;
   }
  }