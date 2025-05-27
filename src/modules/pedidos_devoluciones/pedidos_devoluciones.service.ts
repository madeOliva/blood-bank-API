import {  Injectable } from '@nestjs/common';
import { CreatePedidosDevolucionesDto } from './dto/create-pedidos_devolucione.dto';
import { UpdatePedidosDevolucionesDto } from './dto/update-pedidos_devolucione.dto';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { NotFoundException } from '@nestjs/common';
import { PedidosDevoluciones } from './schema/pedidos_devoluciones.schema';




@Injectable()
export class PedidosDevolucionesService {
  constructor(
    @InjectModel(PedidosDevoluciones.name)
    private pedidoModel: Model<PedidosDevoluciones>,
  ) {}

  // Métodos para VIVERES
  async createViveres(dto: CreatePedidosDevolucionesDto) {
    return this.guardarPedido({
      ...dto,
      tipo: 'VIVERES',
      destino: 'Almacén de Víveres'
    });
  }

  async findAllViveres() {
    return this.pedidoModel.find({ tipo: 'VIVERES' }).exec();
  }

  async findOneViveres(id: string) {
    return this.verificarPedido(id, 'VIVERES');
  }

  async updateViveres(id: string, dto: UpdatePedidosDevolucionesDto) {
    await this.verificarPedido(id, 'VIVERES');
    return this.pedidoModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async removeViveres(id: string) {
    await this.verificarPedido(id, 'VIVERES');
    return this.pedidoModel.findByIdAndDelete(id).exec();
  }

  // Métodos para FARMACIA
  async createFarmacia(dto: CreatePedidosDevolucionesDto) {
    return this.guardarPedido({
      ...dto,
      tipo: 'FARMACIA',
      destino: 'Farmacia Central'
    });
  }

  async findAllFarmacia() {
    return this.pedidoModel.find({ tipo: 'FARMACIA' }).exec();
  }

  async findOneFarmacia(id: string) {
    return this.verificarPedido(id, 'FARMACIA');
  }

  async updateFarmacia(id: string, dto: UpdatePedidosDevolucionesDto) {
    await this.verificarPedido(id, 'FARMACIA');
    return this.pedidoModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async removeFarmacia(id: string) {
    await this.verificarPedido(id, 'FARMACIA');
    return this.pedidoModel.findByIdAndDelete(id).exec();
  }

  // Métodos para CENTRAL
  async createCentral(dto: CreatePedidosDevolucionesDto) {
    return this.guardarPedido({
      ...dto,
      tipo: 'CENTRAL',
      destino: 'Central de Suministros'
    });
  }

  async findAllCentral() {
    return this.pedidoModel.find({ tipo: 'CENTRAL' }).exec();
  }

  async findOneCentral(id: string) {
    return this.verificarPedido(id, 'CENTRAL');
  }

  async updateCentral(id: string, dto: UpdatePedidosDevolucionesDto) {
    await this.verificarPedido(id, 'CENTRAL');
    return this.pedidoModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async removeCentral(id: string) {
    await this.verificarPedido(id, 'CENTRAL');
    return this.pedidoModel.findByIdAndDelete(id).exec();
  }

  // Métodos para MISCELANEA
  async createMiscelanea(dto: CreatePedidosDevolucionesDto) {
    return this.guardarPedido({
      ...dto,
      tipo: 'MISCELANEA',
      destino: 'Miscelánea General'
    });
  }

  async findAllMiscelanea() {
    return this.pedidoModel.find({ tipo: 'MISCELANEA' }).exec();
  }

  async findOneMiscelanea(id: string) {
    return this.verificarPedido(id, 'MISCELANEA');
  }

  async updateMiscelanea(id: string, dto: UpdatePedidosDevolucionesDto) {
    await this.verificarPedido(id, 'MISCELANEA');
    return this.pedidoModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async removeMiscelanea(id: string) {
    await this.verificarPedido(id, 'MISCELANEA');
    return this.pedidoModel.findByIdAndDelete(id).exec();
  }

  // Helpers
  private async guardarPedido(pedidoData: any) {
    const pedido = new this.pedidoModel({
      ...pedidoData,
      fecha: new Date(),
      estado: 'PENDIENTE'
    });
    return pedido.save();
  }

  private async verificarPedido(id: string, tipo: string) {
    const pedido = await this.pedidoModel.findOne({ _id: id, tipo }).exec();
    if (!pedido) {
      throw new NotFoundException(`Pedido ${id} no encontrado en ${tipo}`);
    }
    return pedido;
  }
}
