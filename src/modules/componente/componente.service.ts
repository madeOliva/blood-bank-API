import { ConflictException, Injectable } from '@nestjs/common';
import { CreateComponenteDto } from './dto/create-componente.dto';
import { UpdateComponenteDto } from './dto/update-componente.dto';
import { Model } from 'mongoose';
import { Componente } from './entities/componente.entity';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ComponenteService {
  constructor(@InjectModel(Componente.name)private componenteModel:Model<Componente>){
      }
    //Metodo crear.
        async create(CreateComponenteDto: CreateComponenteDto): Promise<Componente | {message: string}> {
          const existComponente = await this.componenteModel.findOne({ id_componente: CreateComponenteDto.id_componente});
      
          if (existComponente){
           return { message:"Ya existe el componente" }
          }
          const nuevoComponente = new this.componenteModel(CreateComponenteDto);
          nuevoComponente.save();
          return { message: "el componente fue creado correctamente"}
        }
      
      
      //Metodo retornar todos los componente.
       async findAll(): Promise<Componente[] | { message: string}> {
        return this.componenteModel.find()
       }
      
      //Metodo retornar un componente.
       async findOne(id:string): Promise<Componente | {message: string}>{
        const comp = await this.componenteModel.findById({id}).exec();
        if (!comp){
          return{message:'No existe el componente'}
        }
        return comp;
       }
      
     
      //Metodo para actualizar el componente
      async update( id: string, updateComponenteDto: UpdateComponenteDto): Promise<Componente | { message: string}> {
        const updatecommp = await this.componenteModel.findByIdAndUpdate(id, UpdateComponenteDto, {new:true}).exec();
      
        if (!updatecommp) {
          return{ message: `El componente ${id} no existe`}
        }
        return updatecommp;  
      }
       
      //Metodo para eliminar un componente.
      async remove(id: string): Promise<Componente | {message: string}>{
        const deletecomp = await this.componenteModel.findByIdAndDelete({ id});
      
        if (!deletecomp) {
          return { message:"El componete no existe"}
        }
        return deletecomp;
      }
      }
    
