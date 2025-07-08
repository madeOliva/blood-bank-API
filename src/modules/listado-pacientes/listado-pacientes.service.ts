import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateListadoPacienteDto } from './dto/create-listado-paciente.dto';
import { UpdateListadoPacienteDto } from './dto/update-listado-paciente.dto';
import { InjectModel } from '@nestjs/mongoose';
import { listadoPacientes } from './schemas/listado-pacientes.schema';
import { Model } from 'mongoose';

@Injectable()
export class ListadoPacientesService {
  constructor(@InjectModel(listadoPacientes.name) private listadoPacientesModel: Model<listadoPacientes>) { }

  async create(createListadoPacienteDto: CreateListadoPacienteDto) {
    const existPacientes = await this.listadoPacientesModel.findOne({
      ci: createListadoPacienteDto.ci,
    });
    if (existPacientes) { return { message: 'Ya existe' }; }
    const nuevoPaciente = new this.listadoPacientesModel(createListadoPacienteDto);
    nuevoPaciente.save();
    return { message: 'Paciente guardado exitosamente' };
  }

  async findAll(): Promise<listadoPacientes[] | { message: string }> {
    return this.listadoPacientesModel.find();
  }

  async findOne(ci: string) {
    const paciente = await this.listadoPacientesModel.findOne({ ci }).exec();
    if (!paciente) {
      throw new ConflictException('No existe el paciente con CI: ${ci}'); //made
    }
    return paciente;
  }

  update(id: number, updateListadoPacienteDto: UpdateListadoPacienteDto) {
    return `This action updates a #${id} listadoPaciente`;
  }

  // En el servicio (listado-pacientes.service.ts)
  async remove(ci: string): Promise<listadoPacientes> {
    const deletedPaciente = await this.listadoPacientesModel.findOneAndDelete({ ci });

    if (!deletedPaciente) {
      throw new NotFoundException(`Paciente con CI ${ci} no encontrado`);
    }
    return deletedPaciente;
  }

}
