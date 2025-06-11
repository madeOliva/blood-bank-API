import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EstanciaExtranjeroService } from './estancia_extranjero.service';
import { CreateEstanciaExtranjeroDto } from './dto/create-estancia_extranjero.dto';
import { UpdateEstanciaExtranjeroDto } from './dto/update-estancia_extranjero.dto';

@Controller('estancia-extranjero')
export class EstanciaExtranjeroController {
  constructor(private readonly estanciaExtranjeroService: EstanciaExtranjeroService) {}

  @Post()
  create(@Body() createEstanciaExtranjeroDto: CreateEstanciaExtranjeroDto) {
    return this.estanciaExtranjeroService.create(createEstanciaExtranjeroDto);
  }

  @Get()
  findAll() {
    return this.estanciaExtranjeroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estanciaExtranjeroService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEstanciaExtranjeroDto: UpdateEstanciaExtranjeroDto) {
    return this.estanciaExtranjeroService.update(+id, updateEstanciaExtranjeroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estanciaExtranjeroService.remove(+id);
  }
}
