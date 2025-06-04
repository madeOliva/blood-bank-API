import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PedidosDevoluciones } from './schema/pedidos_devoluciones.schema';
import {
  PedidosCentral,
  PedidosFarmacia,
  PedidosMensual,
  PedidosViveres,
} from './entities/pedidos_devolucione.entity';
import { CreatePedidosFarmaciaDto } from './dto/create-pedidos_farmacia.dto';
import { CreatePedidosCentralDto } from './dto/create-pedidos_central.dto';
import { CreatePedidosMensualDto } from './dto/create-pedidos_mensual.dto';
import { CreatePedidosViveresDto } from './dto/create-pedidos_viveres.dto';

@Injectable()
export class PedidosDevolucionesService {
  constructor(
    @InjectModel(PedidosDevoluciones.name) private pedidoModel: Model<PedidosDevoluciones>,
    @InjectModel(PedidosCentral.name) private centralModel: Model<PedidosCentral>,
    @InjectModel(PedidosFarmacia.name) private farmaciaModel: Model<PedidosFarmacia>,
    @InjectModel(PedidosMensual.name) private mensualModel: Model<PedidosMensual>,
    @InjectModel(PedidosViveres.name) private viveresModel: Model<PedidosViveres>,
  ) {}

  // DEVOLUCIONES
async createDevolucion(data: { planId: string; cantidad: number }) {
  const devolucion = new this.pedidoModel(data);
  return devolucion.save();
}
// pedidos_devoluciones.service.ts
async findAllDevoluciones() {
  return this.pedidoModel.find().exec();
}
  // VIVERES
  async createViveres(data: CreatePedidosViveresDto) {
    const pedido = new this.viveresModel(data);
    return pedido.save();
  }
  async findAllViveres() {
    return this.viveresModel.find().exec();
  }
  async findOneViveres(id: string) {
    const pedido = await this.viveresModel.findById(id).exec();
    if (!pedido) throw new NotFoundException(`Pedido víveres ${id} no encontrado`);
    return pedido;
  }
  async updateViveres(id: string, dto: CreatePedidosViveresDto) {
    const pedido = await this.viveresModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!pedido) throw new NotFoundException(`Pedido víveres ${id} no encontrado`);
    return pedido;
  }
  async removeViveres(id: string) {
    const pedido = await this.viveresModel.findByIdAndDelete(id).exec();
    if (!pedido) throw new NotFoundException(`Pedido víveres ${id} no encontrado`);
    return pedido;
  }

  // FARMACIA
  async createFarmacia(data: CreatePedidosFarmaciaDto) {
    const pedido = new this.farmaciaModel(data);
    return pedido.save();
  }
  async findAllFarmacia() {
    return this.farmaciaModel.find().exec();
  }
  async findOneFarmacia(id: string) {
    const pedido = await this.farmaciaModel.findById(id).exec();
    if (!pedido) throw new NotFoundException(`Pedido farmacia ${id} no encontrado`);
    return pedido;
  }
  async updateFarmacia(id: string, dto: CreatePedidosFarmaciaDto) {
    const pedido = await this.farmaciaModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!pedido) throw new NotFoundException(`Pedido farmacia ${id} no encontrado`);
    return pedido;
  }
  async removeFarmacia(id: string) {
    const pedido = await this.farmaciaModel.findByIdAndDelete(id).exec();
    if (!pedido) throw new NotFoundException(`Pedido farmacia ${id} no encontrado`);
    return pedido;
  }

  // CENTRAL
 async createCentral(data: CreatePedidosCentralDto) {
  const pedido = new this.centralModel(data); // SOLO para central
  return pedido.save();
}
  async findAllCentral() {
    return this.centralModel.find().exec();
  }
  async findOneCentral(id: string) {
    const pedido = await this.centralModel.findById(id).exec();
    if (!pedido) throw new NotFoundException(`Pedido central ${id} no encontrado`);
    return pedido;
  }
  async updateCentral(id: string, dto: CreatePedidosCentralDto) {
    const pedido = await this.centralModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!pedido) throw new NotFoundException(`Pedido central ${id} no encontrado`);
    return pedido;
  }
  async removeCentral(id: string) {
    const pedido = await this.centralModel.findByIdAndDelete(id).exec();
    if (!pedido) throw new NotFoundException(`Pedido central ${id} no encontrado`);
    return pedido;
  }

  // MENSUAL (MISCELANEA)
  async createMensual(data: CreatePedidosMensualDto) {
    const pedido = new this.mensualModel(data);
    return pedido.save();
  }
  async findAllMensual() {
    return this.mensualModel.find().exec();
  }
  async findOneMensual(id: string) {
    const pedido = await this.mensualModel.findById(id).exec();
    if (!pedido) throw new NotFoundException(`Pedido mensual ${id} no encontrado`);
    return pedido;
  }
  async updateMensual(id: string, dto: CreatePedidosMensualDto) {
    const pedido = await this.mensualModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!pedido) throw new NotFoundException(`Pedido mensual ${id} no encontrado`);
    return pedido;
  }
  async removeMensual(id: string) {
    const pedido = await this.mensualModel.findByIdAndDelete(id).exec();
    if (!pedido) throw new NotFoundException(`Pedido mensual ${id} no encontrado`);
    return pedido;
  }
}