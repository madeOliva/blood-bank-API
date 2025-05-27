import { Injectable } from '@nestjs/common';
import { CreateTipocomponentehabitualDto } from './dto/create-tipocomponentehabitual.dto';
import { UpdateTipocomponentehabitualDto } from './dto/update-tipocomponentehabitual.dto';

@Injectable()
export class TipocomponentehabitualService {
  create(createTipocomponentehabitualDto: CreateTipocomponentehabitualDto) {
    return 'This action adds a new tipocomponentehabitual';
  }

  findAll() {
    return `This action returns all tipocomponentehabitual`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipocomponentehabitual`;
  }

  update(id: number, updateTipocomponentehabitualDto: UpdateTipocomponentehabitualDto) {
    return `This action updates a #${id} tipocomponentehabitual`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipocomponentehabitual`;
  }
}
