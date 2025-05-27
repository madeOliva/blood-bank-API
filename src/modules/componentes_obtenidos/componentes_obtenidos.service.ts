import { Injectable } from '@nestjs/common';
import { CreateComponentesObtenidosDto } from './dto/create-componentes_obtenidos.dto';
import { UpdateComponentesObtenidosDto } from './dto/update-componentes_obtenidos.dto';
import { Componentes_Obtenidos } from './schema/componentes_obtenidos.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ComponentesObtenidosService {
   constructor(@InjectModel(Componentes_Obtenidos.name)private componentes_obtenidosModel: Model<Componentes_Obtenidos>){
    }
    //Metodo crear.
      async create(CreateComponentesObtenidosDto: CreateComponentesObtenidosDto): Promise<Componentes_Obtenidos | {message: string}> {
        const existComponentes_Obtenidos = await this.componentes_obtenidosModel.findOne({ no_tubuladura: CreateComponentesObtenidosDto.no_tubuladura});
    
        if (existComponentes_Obtenidos){
         return { message:"Ya existe el componente obtenido" }
        }
        const nuevoComponentes_Obtenidos = new this.componentes_obtenidosModel(CreateComponentesObtenidosDto);
        nuevoComponentes_Obtenidos.save();
        return { message: "el componente obtenido fue creado correctamente"}
      }
    
    
    //Metodo retornar todos los componentes obtenidos.
     async findAll(): Promise<Componentes_Obtenidos[] | { message: string}> {
      return this.componentes_obtenidosModel.find()
     }
    
    //Metodo retornar un componente obtenido.
     async findOne(id:string): Promise<Componentes_Obtenidos | { message: string}>{
      const comp_ob = await this.componentes_obtenidosModel.findById({id}).exec();
      if (!comp_ob){
        return { message: 'No existe el componente obtenido'}
      }
      return comp_ob;
     }
    
 
    //Metodo para actualizar las causas
    async update(id: string, UpdateComponentesObtenidosDto: UpdateComponentesObtenidosDto): Promise<Componentes_Obtenidos | { message: string}> {
      const updatecomp_ob= await this.componentes_obtenidosModel.findByIdAndUpdate(id,UpdateComponentesObtenidosDto, {new:true}).exec();    
      if (!updatecomp_ob) {
        return{ message: `El componente obtenido ${id} no existe`}
      }
        return updatecomp_ob;
    }
     
    //Metodo para eliminar un componente obtenido.
    async remove(id: string): Promise<Componentes_Obtenidos | {message: string}>{
      const deletecomp_ob = await this.componentes_obtenidosModel.findByIdAndDelete(id);
    
      if (!deletecomp_ob) {
        return { message:"El componete obtenido no existe"}
      }
      return deletecomp_ob
     
    }
    }
  