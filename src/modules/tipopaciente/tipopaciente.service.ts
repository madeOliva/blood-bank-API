import { Injectable } from '@nestjs/common';
import { CreateTipopacienteDto } from './dto/create-tipopaciente.dto';
import { UpdateTipopacienteDto } from './dto/update-tipopaciente.dto';

@Injectable()
export class TipopacienteService {
  create(createTipopacienteDto: CreateTipopacienteDto) {
    return 'This action adds a new tipopaciente';
  }

  findAll() {
    return `This action returns all tipopaciente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipopaciente`;
  }

  update(id: number, updateTipopacienteDto: UpdateTipopacienteDto) {
    return `This action updates a #${id} tipopaciente`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipopaciente`;
  }
}
