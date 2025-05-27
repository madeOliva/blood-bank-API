import { ConflictException, Injectable } from '@nestjs/common';
import { CreateEstadoCivilDto } from './dto/create-estado_civil.dto';
import { UpdateEstadoCivilDto } from './dto/update-estado_civil.dto';
import { Model} from 'mongoose';
import { InjectModel} from '@nestjs/mongoose';
import { EstadoCivil } from './schema/estado_civil.schema';

@Injectable()
export class EstadoCivilService {
  constructor(@InjectModel(EstadoCivil.name)private estado_civilModel:Model<EstadoCivil>){
    
  }
 async create(createEstadoCivilDto: CreateEstadoCivilDto): Promise<EstadoCivil | {message: string}> {
  const existEstadoCivil = await this.estado_civilModel.findOne({id: createEstadoCivilDto.id});
    if(existEstadoCivil){
     return {message: "Ya existe el estado civil"}
    }
    const nuevoEstadoCivil = new this.estado_civilModel(createEstadoCivilDto);
    nuevoEstadoCivil.save();
    return { message: "El estado civil fue creado exitosamente"}
  }

  findAll(): Promise<EstadoCivil[] | {message: string}> {
    return this.estado_civilModel.find();
  }

  async findOne(id: string): Promise<EstadoCivil | {message: string}> {
    const estado_civil = await this.estado_civilModel.findById({id}).exec();
    if(!estado_civil){
      return {message: "No existe el estado civil"}
    }
    return estado_civil
  }

  async update(id: string, UpdateEstadoCivilDto: UpdateEstadoCivilDto): Promise<EstadoCivil | {message: string}> {
    const updateEstadoCivil = await this.estado_civilModel.findByIdAndUpdate(id, UpdateEstadoCivilDto, {new:true}).exec();
    if(!updateEstadoCivil){
      return {message: `No existe el estado civil ${id}`}
    }
    return updateEstadoCivil
   
  }
  

  async remove(id: string): Promise<EstadoCivil | {message: string}>  {
    const deleteEstadoCivil = await this.estado_civilModel.findByIdAndDelete(id);
    if (!deleteEstadoCivil){
      return {message: "El estado civil no existe"}
    }
    return deleteEstadoCivil;
    }
}
