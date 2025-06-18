import { ConflictException, Injectable } from '@nestjs/common';
import { CreateStockbancohaDto } from './dto/create-stockbancoha.dto';
import { UpdateStockbancohaDto } from './dto/update-stockbancoha.dto';
import { stockdelbancohas } from './schema/stockdelbancohas.schema';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StockbancohasService {

  constructor(@InjectModel(stockdelbancohas.name) private stockdelbancohasbmodel: Model<stockdelbancohas>) { }

  //Metodo para crear o insertar una bolsa en el stock
  async create(createStockbancohaDto: CreateStockbancohaDto): Promise<stockdelbancohas | { message: string }> {
    const existStockbancoha = await this.stockdelbancohasbmodel.findOne({ stockdelbancohas: createStockbancohaDto.codigo_bolsa });

    if (existStockbancoha) { return { message: "Ya existe esa bolsa" }; }
    const nuevoStockbancohas = new this.stockdelbancohasbmodel(createStockbancohaDto);
    nuevoStockbancohas.save();
    return { message: "Bolsa insertada exitosamente" };
  }

  //Metodo para retornar todas las bolsas
  async findAll(): Promise<stockdelbancohas[] | { message: string }> {
    const stock = await this.stockdelbancohasbmodel.find().exec();
    if (stock.length === 0) { return { message: "No se han realizado pruebas pre transfusionales" } }
    return stock;
  }

  //Metodo para retornar todas las bolsas segun el tipo de paciente
  async findAllTipoPaciente(tipo_paciente: string): Promise<stockdelbancohas[] | { message: string }> {
    const stock = await this.stockdelbancohasbmodel.find({ tipo_paciente }).exec();
    if (stock.length === 0) {
      return { message: "No se han realizado pruebas pre transfusionales para ese tipo de paciente" };
    }
    return stock;
  }

  //Metodo para retornar una bolsa especifica
  async findOne(codigo_bolsa: String) {
    const bolsaSangre = this.stockdelbancohasbmodel.findOne({ codigo_bolsa }).exec();
    if (!bolsaSangre) {
      throw new ConflictException(`No existe bolsa con el codigo ${codigo_bolsa}`);
    }
    return this.stockdelbancohasbmodel.findOne({ codigo_bolsa });
  }

  //Metodo para actualizar una bolsa
  async update(codigo_bolsa: string, updateStockbancohaDto: UpdateStockbancohaDto): Promise<stockdelbancohas | { message: string }> {
    const actualizarbolsaSangre = await this.stockdelbancohasbmodel.findOneAndUpdate({ codigo_bolsa }, updateStockbancohaDto, { new: true }).exec();
    if (!actualizarbolsaSangre) {
      return { message: `No existe bolsa con el codigo ${codigo_bolsa}` };
    }
    return actualizarbolsaSangre;
  }

  //Metodo para eliminar una bolsa
  async remove(codigo_bolsa: String): Promise<stockdelbancohas | { message: string }> {
    const eliminarbolsaSangre = await this.stockdelbancohasbmodel.findOneAndDelete({ codigo_bolsa });
    if (!eliminarbolsaSangre) return { message: "La bolsa no existe en el stock" };
    return eliminarbolsaSangre;
  }

}

