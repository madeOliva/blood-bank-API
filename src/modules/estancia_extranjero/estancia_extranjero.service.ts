import { Injectable } from '@nestjs/common';
import { CreateEstanciaExtranjeroDto } from './dto/create-estancia_extranjero.dto';
import { UpdateEstanciaExtranjeroDto } from './dto/update-estancia_extranjero.dto';

@Injectable()
export class EstanciaExtranjeroService {
  create(createEstanciaExtranjeroDto: CreateEstanciaExtranjeroDto) {
    return 'This action adds a new estanciaExtranjero';
  }

  findAll() {
    return `This action returns all estanciaExtranjero`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estanciaExtranjero`;
  }

  update(id: number, updateEstanciaExtranjeroDto: UpdateEstanciaExtranjeroDto) {
    return `This action updates a #${id} estanciaExtranjero`;
  }

  remove(id: number) {
    return `This action removes a #${id} estanciaExtranjero`;
  }
}
