import { Injectable } from '@nestjs/common';
import { CreateTipocomponenteespecialDto } from './dto/create-tipocomponenteespecial.dto';
import { UpdateTipocomponenteespecialDto } from './dto/update-tipocomponenteespecial.dto';

@Injectable()
export class TipocomponenteespecialService {
  create(createTipocomponenteespecialDto: CreateTipocomponenteespecialDto) {
    return 'This action adds a new tipocomponenteespecial';
  }

  findAll() {
    return `This action returns all tipocomponenteespecial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipocomponenteespecial`;
  }

  update(id: number, updateTipocomponenteespecialDto: UpdateTipocomponenteespecialDto) {
    return `This action updates a #${id} tipocomponenteespecial`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipocomponenteespecial`;
  }
}
