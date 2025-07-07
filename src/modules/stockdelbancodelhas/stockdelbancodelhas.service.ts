import { Injectable } from '@nestjs/common';
import { CreateStockdelbancodelhaDto } from './dto/create-stockdelbancodelha.dto';
import { UpdateStockdelbancodelhaDto } from './dto/update-stockdelbancodelha.dto';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { stockdelbancodelhas } from './schemas/stockdelbancodelhas.schema';

@Injectable()
export class StockdelbancodelhasService {
  constructor(@InjectModel(stockdelbancodelhas.name) private stockdelbancodelhasModel: Model<stockdelbancodelhas>) { }

  // Crear o insertar una bolsa en el stock
  async create(createDto: CreateStockdelbancodelhaDto): Promise<stockdelbancodelhas | { message: string }> {
    const existBolsa = await this.stockdelbancodelhasModel.findOne({ codigo_bolsa: createDto.codigo_bolsa });
    if (existBolsa) {
      return { message: "Ya existe una bolsa con ese código" };
    }
    const nuevaBolsa = new this.stockdelbancodelhasModel(createDto);
    await nuevaBolsa.save();
    return { message: "Bolsa registrada exitosamente" };
  }

  // Retornar todas las bolsas
  async findAll(): Promise<stockdelbancodelhas[] | { message: string }> {
    const stock = await this.stockdelbancodelhasModel.find().exec();
    if (stock.length === 0) {
      return { message: "No hay bolsas registradas" };
    }
    return stock;
  }

  // Retornar todas las bolsas según tipo de paciente
  async findAllTipoPaciente(tipo_paciente: string): Promise<stockdelbancodelhas[] | { message: string }> {
    const stock = await this.stockdelbancodelhasModel.find({ tipo_paciente }).exec();
    if (stock.length === 0) {
      return { message: "No hay bolsas para ese tipo de paciente" };
    }
    return stock;
  }

  // Retornar una bolsa específica por código
  async findOne(codigo_bolsa: string): Promise<stockdelbancodelhas | { message: string }> {
    const bolsa = await this.stockdelbancodelhasModel.findOne({ codigo_bolsa }).exec();
    if (!bolsa) {
      return { message: `No existe bolsa con el código ${codigo_bolsa}` };
    }
    return bolsa;
  }

  // Actualizar una bolsa por código
  async update(codigo_bolsa: string, updateDto: UpdateStockdelbancodelhaDto): Promise<stockdelbancodelhas | { message: string }> {
    const bolsaActualizada = await this.stockdelbancodelhasModel.findOneAndUpdate(
      { codigo_bolsa },
      updateDto,
      { new: true }
    ).exec();

    if (!bolsaActualizada) {
      return { message: `No existe bolsa con el código ${codigo_bolsa}` };
    }
    return bolsaActualizada;
  }

  // Eliminar una bolsa por código
  async remove(codigo_bolsa: string): Promise<stockdelbancodelhas | { message: string }> {
    const bolsaEliminada = await this.stockdelbancodelhasModel.findOneAndDelete({ codigo_bolsa }).exec();
    if (!bolsaEliminada) {
      return { message: "La bolsa no existe en el stock" };
    }
    return bolsaEliminada;
  }
}
