import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAreaSaludDto } from './dto/create-area_salud.dto';
import { UpdateAreaSaludDto } from './dto/update-area_salud.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AreaSalud } from './entities/area_salud.entity';

@Injectable()
export class AreaSaludService {

  constructor (
     @InjectModel(AreaSalud.name)
       private area_saludModel: Model<AreaSalud>){}


    //metodo para crear
  async create(createAreaSaludDto: CreateAreaSaludDto): Promise<AreaSalud | {message: string}> {
 const existAreaSalud = await this.area_saludModel.findOne({name: createAreaSaludDto.name}
 );
 if (existAreaSalud){
  return{message: "El area de salud ya existe "}
 }
 const nuevaAreaSalud = new this.area_saludModel(createAreaSaludDto);
 nuevaAreaSalud.save();
 return  {message: "El area de salud fue creada exitosamente"}
  }


    //metodo para retornar todas
  async findAll(): Promise<AreaSalud[] | {message: string}> {
    return this.area_saludModel.find()
  }

   //metodo para buscar una

  async findOne(area_salud: string) {
    const area = await this.area_saludModel.findOne({area_salud}).exec();
    if (!area){
      throw new ConflictException(`No existe el area de salud ${area_salud}`)
    }
    return this.area_saludModel.findOne({area_salud});
  }

    //metodo para modificar

  async update(id: string, UpdateAreaSaludDto: UpdateAreaSaludDto): Promise<AreaSalud | {message: string}> {
    const updatearea = await this.area_saludModel.findByIdAndUpdate(id, UpdateAreaSaludDto, {new:true}).exec();

    if(!updatearea){
      return {message: `No existe el area de salud ${id}`}
    }
    return updatearea;
  }

     //metodo para eliminar

  async remove(id: string): Promise<AreaSalud | {message: string}> {
    const deletearea = await this.area_saludModel.findByIdAndDelete(id);

    if (!deletearea){
      return{ message: "El area de salud no existe"}
    }
    return deletearea;
  }
}
