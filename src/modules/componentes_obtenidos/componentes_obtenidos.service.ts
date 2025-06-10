import { Injectable } from '@nestjs/common';
import { CreateComponentesObtenidosDto } from './dto/create-componentes_obtenidos.dto';
import { UpdateComponentesObtenidosDto } from './dto/update-componentes_obtenidos.dto';
import { ComponentesObtenidos } from './schema/componentes_obtenidos.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ComponentesObtenidosService {
   constructor(
  @InjectModel(ComponentesObtenidos.name) private componentes_obtenidosModel: Model<ComponentesObtenidos>
) {}
    //Metodo crear.
        async create(CreateComponentesObtenidosDto: CreateComponentesObtenidosDto): Promise<ComponentesObtenidos | {message: string}> {
    const existComponentes_Obtenidos = await this.componentes_obtenidosModel.findOne({ no_tubuladura: CreateComponentesObtenidosDto.no_tubuladura});
  
    if (existComponentes_Obtenidos){
      return { message:"Ya existe el componente obtenido" }
    }
    const nuevoComponentes_Obtenidos = new this.componentes_obtenidosModel(CreateComponentesObtenidosDto);
    await nuevoComponentes_Obtenidos.save();

    if (CreateComponentesObtenidosDto.estado_obtencion === 'obtenido') {
      return { message: "el componente obtenido fue creado correctamente" }
    } else if (CreateComponentesObtenidosDto.estado_obtencion === 'baja') {
      return { message: "el componente baja fue creado correctamente" }
    } else {
      return { message: "el componente fue creado correctamente" }
    }
  }
    
   // Retornar todos los componentes con estado 'obtenido'
async findAllObtenidos() {
  return this.componentes_obtenidosModel.find({ estado_obtencion: 'obtenido' });
}

// Retornar todos los componentes con estado 'baja'
async findAllBaja(): Promise<ComponentesObtenidos[]> {
  const result = await this.componentes_obtenidosModel.find({ estado_obtencion: 'baja' });
  console.log("BAJAS ENCONTRADAS:", result);
  return result;
}

    
    //Metodo retornar un componente obtenido.
     async findOne(id:string): Promise<ComponentesObtenidos | { message: string}>{
      const comp_ob = await this.componentes_obtenidosModel.findById({id}).exec();
      if (!comp_ob){
        return { message: 'No existe el componente obtenido'}
      }
      return comp_ob;
     }
    
 
    //Metodo para actualizar las causas
    async update(id: string, UpdateComponentesObtenidosDto: UpdateComponentesObtenidosDto): Promise<ComponentesObtenidos | { message: string}> {
      const updatecomp_ob= await this.componentes_obtenidosModel.findByIdAndUpdate(id,UpdateComponentesObtenidosDto, {new:true}).exec();    
      if (!updatecomp_ob) {
        return{ message: `El componente obtenido ${id} no existe`}
      }
        return updatecomp_ob;
    }
     
    //Metodo para eliminar un componente obtenido.
    async remove(id: string): Promise<ComponentesObtenidos | {message: string}>{
      const deletecomp_ob = await this.componentes_obtenidosModel.findByIdAndDelete(id);
    
      if (!deletecomp_ob) {
        return { message:"El componete obtenido no existe"}
      }
      return deletecomp_ob
     
    }
    }
  