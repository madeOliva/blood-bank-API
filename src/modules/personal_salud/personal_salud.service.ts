import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePersonalSaludDto } from './dto/create-personal_salud.dto';
import { UpdatePersonalSaludDto } from './dto/update-personal_salud.dto';
import { Model} from 'mongoose';
import { PersonalSalud} from './entities/personal_salud.entity';
import { InjectModel} from '@nestjs/mongoose';

@Injectable()
export class PersonalSaludService {
  constructor(@InjectModel(PersonalSalud.name)private personal_saludModel:Model<PersonalSalud>){
    
  }

  // Crear personal de salud
 async  create(createPersonalSaludDto: CreatePersonalSaludDto): Promise<PersonalSalud | {message: string}> {
  const existPersonalSalud = await this.personal_saludModel.findOne({ci: createPersonalSaludDto.ci});
    if(existPersonalSalud){
     return {message: "El personal ya existe"}
    }
    const nuevoPersonal = new this.personal_saludModel(createPersonalSaludDto);
    nuevoPersonal.save();
    return { message: "El personal fue creada exitosamente"}
  }

  async findAll(): Promise<PersonalSalud[] | {message: string}> {
    return this.personal_saludModel.find();
  }

  async findOne(id: string) {
    const personalSalud = await this.personal_saludModel.findById({id}).exec();
    if(!personalSalud){
      return {message: "No existe el personal"}
    }
    return personalSalud
  }

  async update(id: string, updatePersonalSaludDto: UpdatePersonalSaludDto): Promise<PersonalSalud | {message: string}>  {
    const updatePersonalSalud = await this.personal_saludModel.findByIdAndUpdate(id, UpdatePersonalSaludDto, {new:true}).exec();
    if(!updatePersonalSalud){
      return {message: `No existe el personal ${id}`}
    }
    return updatePersonalSalud
   }

 async remove(id: string): Promise<PersonalSalud | {message: string}> {
  const deletePersonal = await this.personal_saludModel.findByIdAndDelete(id);
  if (!deletePersonal){
    return {message: "Este personal no existe"}
  }
  return deletePersonal;
  }
 }

