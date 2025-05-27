import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Estados } from './schemas/estados.schemas';
import { Model } from 'mongoose';
import { CreateEstadoDto } from './dto/create-estados.dto';
import { UpdateEstadoDto } from './dto/update-estados.dto';

@Injectable()
export class EstadosService {
  constructor(
    @InjectModel(Estados.name) private estadosModel: Model<Estados>,
  ) {}

  async getOne(id: string) {
    const estado = await this.estadosModel.findById(id).exec();
    if (!estado) {
      throw new ConflictException('No existe el Estado');
    }
    return this.estadosModel.findById(id);
  }

  async getAll() {
    return this.estadosModel.find();
  }

  async create(createEstadoDto: CreateEstadoDto) {
    const existEstado = await this.estadosModel.findById({
      nombre: createEstadoDto.nombre_estado,
    });
    if (existEstado) {
      throw new ConflictException('Ya existe el estado');
    }
    const newEstados = new this.estadosModel(createEstadoDto);
    return newEstados.save();
  }

  async update(updateEstadoDto: UpdateEstadoDto, id: string) {
    const updateEstado = this.estadosModel.findByIdAndUpdate(
      id,
      updateEstadoDto,
      { new: true },
    );
    if (!updateEstado) {
      throw new ConflictException('No existe el estado' + id);
    }
    return updateEstado;
  }

  async delete(id: string) {
    const deleteEstado = this.estadosModel.findByIdAndDelete(id);
    if (!deleteEstado) {
      throw new ConflictException('No existe el estado' + id);
    }
    return deleteEstado;
  }
}
