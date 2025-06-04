import { ConflictException, Injectable } from '@nestjs/common';
import { Componentes } from './schemas/componentes.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateComponenteDto } from './dto/create-componentes.dto';
import { UpdateComponenteDto } from './dto/update-componentes.dto';

@Injectable()
export class ComponentesService {
  constructor(
    @InjectModel(Componentes.name)
    private componentesModel: Model<Componentes>,
  ) {}

  async getOne(id: string) {
    const componente = await this.componentesModel.findById(id).exec();
    if (!componente) {
      throw new ConflictException('No existe el componente');
    }
    return this.componentesModel.findById(id);
  }

  async getAll() {
    return this.componentesModel.find();
  }

  async create(createComponenteDto: CreateComponenteDto) {
  // Busca si ya existe un componente con ese nombre
  const existComponentes = await this.componentesModel.findOne({
    nombre_componente: createComponenteDto.nombre_componente,
  });

  if (existComponentes) {
    throw new ConflictException('Ya existe el componente');
  }

  // Crea el nuevo componente
  const newComponentes = new this.componentesModel({
    nombre_componente: createComponenteDto.nombre_componente,
    // agrega aquí otros campos si es necesario
  });

  return newComponentes.save();
}

  async update(updateComponenteDto: UpdateComponenteDto, id: string) {
    const updateComponente = this.componentesModel.findByIdAndUpdate(
      id,
      updateComponenteDto,
      { new: true },
    );
    if (!updateComponente) {
      throw new ConflictException('No existe el componente' + id);
    }
    return updateComponente;
  }

  async delete(id: string) {
    const deleteComponente = this.componentesModel.findByIdAndDelete(id);
    if (!deleteComponente) {
      throw new ConflictException('No existe el componente' + id);
    }
    return deleteComponente;
  }
}
