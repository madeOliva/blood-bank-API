import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ComponentesObtenidos, ComponentesObtenidosDocument } from './schema/componentes_obtenidos.schema';
import { CreateComponentesObtenidosDto } from './dto/create-componentes_obtenidos.dto';

@Injectable()
export class ComponentesObtenidosService {
  constructor(
    @InjectModel(ComponentesObtenidos.name)
    private readonly componentesObtenidosModel: Model<ComponentesObtenidosDocument>,
  ) {}
async create(createDto: CreateComponentesObtenidosDto) {
  return this.componentesObtenidosModel.create(createDto);
}

async getRegistrosDonacionUsados() {
  return this.componentesObtenidosModel.distinct('registro_donacion');
}

// ...existing code...

   

async desecharComponente(id: string) {
    return this.componentesObtenidosModel.findByIdAndUpdate(
      id,
      { estado_obtencion: 'desechada' },
      { new: true }
    );
  }
async liberarComponente(id: string) {
  console.log("Liberando componente:", id);
  return this.componentesObtenidosModel.findByIdAndUpdate(
    id,
    { estado_obtencion: "liberado" },
    { new: true }
  );
}
async findByEstadoObtencion(estado: string) {
  return this.componentesObtenidosModel
    .find({ estado_obtencion: estado })
    .lean();
}
// Ejemplo en el servicio
// ...existing code...
async getComponentesObtenidos(estado?: string) {
  const filter = estado ? { estado_obtencion: estado } : {};
  return this.componentesObtenidosModel
    .find(filter)
  .populate({
  path: 'registro_donacion',
  populate: {
    path: 'historiaClinica',
    populate: { path: 'sexo' }
  }
})
    .lean();
}

async actualizarNoLotePorComponenteId(componente_id: string, no_lote: string) {
  return this.componentesObtenidosModel.updateOne(
    { "componentes._id": new Types.ObjectId(componente_id) },
    { $set: { "componentes.$.no_lote": no_lote } }
  );
}
async updateEstadoObtencion(id: string, estado_obtencion: string) {
  console.log("Actualizando estado_obtencion:", id, estado_obtencion);
  return this.componentesObtenidosModel.findByIdAndUpdate(
    id,
    { estado_obtencion },
    { new: true }
  );
}
async getBajas() {
  console.log('Entrando a getBajas');
  const resultado = await this.componentesObtenidosModel
    .find({ estado_obtencion: 'desechada' })
    .populate('centrifugacion');
  console.log('Resultado con populate:', resultado);
  return resultado;
}
}

