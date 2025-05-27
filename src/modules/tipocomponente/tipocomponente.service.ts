import { Injectable } from '@nestjs/common';
import { CreateTipocomponenteDto } from './dto/create-tipocomponente.dto';
import { UpdateTipocomponenteDto } from './dto/update-tipocomponente.dto';

@Injectable()
export class TipocomponenteService {
  create(createTipocomponenteDto: CreateTipocomponenteDto) {
    return 'This action adds a new tipocomponente';
  }

  findAll() {
    return `This action returns all tipocomponente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipocomponente`;
  }

  update(id: number, updateTipocomponenteDto: UpdateTipocomponenteDto) {
    return `This action updates a #${id} tipocomponente`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipocomponente`;
  }
}
