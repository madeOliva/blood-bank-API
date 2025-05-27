import { Injectable } from '@nestjs/common';
import { CreateHabitosToxicoDto } from './dto/create-habitos_toxico.dto';
import { UpdateHabitosToxicoDto } from './dto/update-habitos_toxico.dto';

@Injectable()
export class HabitosToxicosService {
  create(createHabitosToxicoDto: CreateHabitosToxicoDto) {
    return 'This action adds a new habitosToxico';
  }

  findAll() {
    return `This action returns all habitosToxicos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} habitosToxico`;
  }

  update(id: number, updateHabitosToxicoDto: UpdateHabitosToxicoDto) {
    return `This action updates a #${id} habitosToxico`;
  }

  remove(id: number) {
    return `This action removes a #${id} habitosToxico`;
  }
}
