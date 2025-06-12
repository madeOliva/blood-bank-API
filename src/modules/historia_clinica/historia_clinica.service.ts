import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateHistoriaClinicaDto } from './dto/create-historia_clinica.dto';
import { UpdateHistoriaClinicaDto } from './dto/update-historia_clinica.dto';
import { Historia_Clinica } from './schema/historia_clinica.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class HistoriaClinicaService {
  constructor(
    @InjectModel(Historia_Clinica.name)
    private Historia_ClinicaModel: Model<Historia_Clinica>,
  ) {}

  
 // Obtener una historia clínica por ID
  async getOne(id: string) {
    const historia = await this.Historia_ClinicaModel.findById(id);
    if (!historia) {
      throw new NotFoundException('No existe la historia clínica con id ' + id);
    }
    return historia;
  }

  // Obtener todas las historias clínicas
  async getAll() {
    return this.Historia_ClinicaModel.find().exec();
  }

  // Crear una nueva historia clínica
  async create(createHistoriaClinicaDto: CreateHistoriaClinicaDto) {
    // Puedes cambiar el campo de búsqueda si tienes un campo único (ej: nro_historia)
    const existHistoria = await this.Historia_ClinicaModel.findOne({
     ci: createHistoriaClinicaDto.ci,
    });
    if (existHistoria) {
      throw new ConflictException('Ya existe una historia clínica con ese número');
    }
    const newHistoria = new this.Historia_ClinicaModel(createHistoriaClinicaDto);
    return newHistoria.save();
  }

  // Actualizar una historia clínica existente
  async update(id: string, updateHistoriaClinicaDto: UpdateHistoriaClinicaDto) {
    const updatedHistoria = await this.Historia_ClinicaModel
      .findByIdAndUpdate(id, updateHistoriaClinicaDto, { new: true })
      .exec();

    if (!updatedHistoria) {
      throw new NotFoundException('No existe la historia clínica con id ' + id);
    }
    return updatedHistoria;
  }

  // Eliminar una historia clínica
  async delete(id: string) {
    const deletedHistoria = await this.Historia_ClinicaModel.findByIdAndDelete(id).exec();
    if (!deletedHistoria) {
      throw new NotFoundException('No existe la historia clínica con id ' + id);
    }
    return deletedHistoria;
  }

  
}

