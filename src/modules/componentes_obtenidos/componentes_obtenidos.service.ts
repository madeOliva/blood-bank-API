import { Injectable } from '@nestjs/common';
import { CreateComponentesObtenidosDto } from './dto/create-componentes_obtenidos.dto';
import { UpdateComponentesObtenidosDto } from './dto/update-componentes_obtenidos.dto';
import { ComponentesObtenidos } from './schema/componentes_obtenidos.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Historia_Clinica } from '../historia_clinica/schema/historia_clinica.schema';
import { RegistroDonacion } from '../registro_donacion/schemas/registro_donacion.schema';

@Injectable()
export class ComponentesObtenidosService {
   constructor(@InjectModel(ComponentesObtenidos.name)private componentes_obtenidosModel: Model<ComponentesObtenidos>,
      @InjectModel(Historia_Clinica.name) private historiaClinicaModel: Model<Historia_Clinica>,
      @InjectModel(RegistroDonacion.name) private registroDonacionModel: Model<RegistroDonacion>){
    }
    //Metodo crear.
    async create(createComponentesObtenidosDto: CreateComponentesObtenidosDto): Promise<ComponentesObtenidos | { message: string }> {
  // Buscar la historia clínica por no_hc (ajusta si tu referencia es a centrifugacion)
  const historia = await this.historiaClinicaModel.findOne({ no_hc: createComponentesObtenidosDto.no_hc });
  if (!historia) {
    return { message: "No existe la historia clínica para ese no_hc" };
  }

  // Verificar si ya existe el componente obtenido para esa historia clínica y componente
  const existComponentes_Obtenidos = await this.componentes_obtenidosModel.findOne({
    historia_clinica: historia._id,
    componentes: createComponentesObtenidosDto.componentes
  });

  if (existComponentes_Obtenidos) {
    return { message: "Ya existe el componente obtenido" };
  }

  // Crear el nuevo componente obtenido con la referencia
  const nuevoComponentes_Obtenidos = new this.componentes_obtenidosModel({
    ...createComponentesObtenidosDto,
    historia_clinica: historia._id
  });
  await nuevoComponentes_Obtenidos.save();

  if (createComponentesObtenidosDto.estado_obtencion === 'obtenido') {
    return { message: "El componente obtenido fue creado correctamente" };
  } else if (createComponentesObtenidosDto.estado_obtencion === 'baja') {
    return { message: "El componente baja fue creado correctamente" };
  } else {
    return { message: "El componente fue creado correctamente" };
  }
}


        /*async create(CreateComponentesObtenidosDto: CreateComponentesObtenidosDto): Promise<ComponentesObtenidos | {message: string}> {
    const existComponentes_Obtenidos = await this.componentes_obtenidosModel.findOne({ np_hc: CreateComponentesObtenidosDto.no_hc);
  
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
  }*/
    
 // Retornar todos los componentes con estado 'obtenido'
  async findAllObtenidos(): Promise<ComponentesObtenidos[]> {
    return this.componentes_obtenidosModel.find({ estado_obtencion: 'obtenido' }).populate('historia_clinica');
  }

  // Retornar todos los componentes con estado 'baja'
  async findAllBaja(): Promise<ComponentesObtenidos[]> {
    return this.componentes_obtenidosModel.find({ estado_obtencion: 'baja' }).populate('historia_clinica');
  }

    
    //Metodo retornar un componente obtenido.
     async findOne(id:string): Promise<ComponentesObtenidos | { message: string}>{
      const comp_ob = await this.componentes_obtenidosModel.findById({id}).exec();
      if (!comp_ob){
        return { message: 'No existe el componente obtenido'}
      }
      return comp_ob;
     }
    
 
    //Metodo para actualizar
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
  