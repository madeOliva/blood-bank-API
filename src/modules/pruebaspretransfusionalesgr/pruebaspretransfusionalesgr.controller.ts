import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PruebaspretransfusionalesgrService } from './pruebaspretransfusionalesgr.service';
import { CreatePruebaspretransfusionalesgrDto } from './dto/create-pruebaspretransfusionalesgr.dto';
import { UpdatePruebaspretransfusionalesgrDto } from './dto/update-pruebaspretransfusionalesgr.dto';

@Controller('pruebaspretransfusionalesgr')
export class PruebaspretransfusionalesgrController {
  constructor(private readonly pruebaspretransfusionalesgrService: PruebaspretransfusionalesgrService) {}

  @Post()
  create(@Body() createPruebaspretransfusionalesgrDto: CreatePruebaspretransfusionalesgrDto) {
    return this.pruebaspretransfusionalesgrService.create(createPruebaspretransfusionalesgrDto);
  }

  @Get()
  findAll() {
    return this.pruebaspretransfusionalesgrService.findAll();
  }

  @Get(':codigo_bolsa')
  findOne(@Param('codigo_bolsa') codigo_bolsa: string) {
    return this.pruebaspretransfusionalesgrService.findOne(codigo_bolsa);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePruebaspretransfusionalesgrDto: UpdatePruebaspretransfusionalesgrDto) {
    return this.pruebaspretransfusionalesgrService.update(+id, updatePruebaspretransfusionalesgrDto);
  }

  @Delete(':codigo_bolsa')
  remove(@Param('codigo_bolsa') codigo_bolsa: string) {
    return this.pruebaspretransfusionalesgrService.remove(codigo_bolsa);
  }
}
