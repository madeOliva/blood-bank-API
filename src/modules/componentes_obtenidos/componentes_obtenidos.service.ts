import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ComponentesObtenidos, ComponentesObtenidosDocument } from './schema/componentes_obtenidos.schema';
import { CreateComponentesObtenidosDto } from './dto/create-componentes_obtenidos.dto';

@Injectable()
export class ComponentesObtenidosService {
  constructor(
    @InjectModel(ComponentesObtenidos.name)
    private readonly componentesObtenidosModel: Model<ComponentesObtenidosDocument>,
  ) {}

async createComponente(data: any) {
  console.log('Datos recibidos en createComponente:', data); // <-- Agregado para depuración
  return this.componentesObtenidosModel.create(data);
}



// ...existing code...

   

async desecharComponente(id: string) {
  // Busca el componente obtenido
  const componente = await this.componentesObtenidosModel.findById(id).lean();
  if (!componente) throw new Error('Componente no encontrado');

  // Busca y actualiza el registro de donación relacionado
  const RegistroDonacionModel = this.componentesObtenidosModel.db.model('RegistroDonacion');
  await RegistroDonacionModel.findByIdAndUpdate(
    componente.registro_donacion,
    { estado: "desechada" }
  );
  return { success: true };
}
async liberarComponente(id: string) {
  // Busca el componente obtenido
  const componente = await this.componentesObtenidosModel.findById(id).lean();
  if (!componente) throw new Error('Componente no encontrado');

  // Busca y actualiza el registro de donación relacionado
  const RegistroDonacionModel = this.componentesObtenidosModel.db.model('RegistroDonacion');
  await RegistroDonacionModel.findByIdAndUpdate(
    componente.registro_donacion,
    { estado: "liberado" }
  );
  return { success: true };
}
async findByEstadoObtencion(estado: string) {
  return this.componentesObtenidosModel
    .find({ estado_obtencion: estado })
    .lean();
}
// Ejemplo en el servicio
async getComponentesObtenidos(estado?: string) {
  const filter = estado ? { estado_obtencion: estado } : {};
  console.log('Filtro usado:', filter); // <-- Agregado
  const result = await this.componentesObtenidosModel
    .find(filter)
    .populate({
      path: 'registro_donacion',
      populate: { path: 'historiaClinica' }
    })
    .lean();
  console.log('Resultado de la consulta:', result); // <-- Agregado
  return result;
}
}