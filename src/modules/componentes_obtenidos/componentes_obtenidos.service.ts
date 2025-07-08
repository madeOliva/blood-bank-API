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

async actualizarEstadoComponente(componenteId: string, nuevoEstado: string, causa_baja?: string) {
  const objectId = new Types.ObjectId(componenteId);
  const setObj: any = { "componentes.$.estado_obtencion": nuevoEstado };
  if (causa_baja) setObj["componentes.$.causa_baja"] = causa_baja;
  console.log(setObj); // <-- agrega esto
  return this.componentesObtenidosModel.updateOne(
    { "componentes._id": objectId },
    { $set: setObj }
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
  try {
    // Si se pasa un estado, busca dentro de componentes.estado_obtencion
    const filter = estado
      ? { "componentes.estado_obtencion": estado }
      : {};
    return await this.componentesObtenidosModel
      .find(filter)
      .populate({
        path: 'registro_donacion',
        populate: {
          path: 'historiaClinica',
          populate: [
            { path: 'sexo' },
            { path: 'grupo_sanguine' },
            { path: 'factor' }
          ]
        }
      })
      .lean();
  } catch (error) {
    console.error("Error en getComponentesObtenidos:", error);
    throw error;
  }
}
async updateEstadoComponente(componenteId: string, estado_obtencion: string) {
  return this.componentesObtenidosModel.updateOne(
    { "componentes._id": componenteId },
    { $set: { "componentes.$.estado_obtencion": estado_obtencion } }
  );
}
async actualizarNoLotePorComponenteId(componente_id: string, no_lote: string, envio_industria: boolean) {
  return this.componentesObtenidosModel.updateOne(
    { "componentes._id": componente_id },
    {
      $set: {
        "componentes.$.no_lote": no_lote,
        "componentes.$.envio_industria": envio_industria
      }
    }
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
    .find({ "componentes.estado_obtencion": { $in: ["baja", "desechada"] } })
    .populate('centrifugacion');
  console.log('Resultado con populate:', resultado);
  return resultado;
}
}

