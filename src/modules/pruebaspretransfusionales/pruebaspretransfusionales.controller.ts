import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PruebaspretransfusionalesService } from './pruebaspretransfusionales.service';
import { CreatePruebaspretransfusionaleDto } from './dto/create-pruebaspretransfusionale.dto';
import { UpdatePruebaspretransfusionaleDto } from './dto/update-pruebaspretransfusionale.dto';

@Controller('pruebaspretransfusionales')
export class PruebaspretransfusionalesController {
  constructor(private readonly pruebaspretransfusionalesService: PruebaspretransfusionalesService) {}

  @Post()
  create(@Body() createPruebaspretransfusionaleDto: CreatePruebaspretransfusionaleDto) {
    return this.pruebaspretransfusionalesService.create(createPruebaspretransfusionaleDto);
  }

  @Get()
  findAll() {
    return this.pruebaspretransfusionalesService.findAll();
  }

  @Get(':codigo_bolsa')
  findOne(@Param('codigo_bolsa') codigo_bolsa: string) {
    return this.pruebaspretransfusionalesService.findOne(codigo_bolsa);
  }

  @Patch(':codigo_bolsa')
  update(@Param('codigo_bolsa') codigo_bolsa: string, @Body() updatePruebaspretransfusionaleDto: UpdatePruebaspretransfusionaleDto) {
    return this.pruebaspretransfusionalesService.update(codigo_bolsa, updatePruebaspretransfusionaleDto);
  }

  @Delete(':codigo_bolsa')
  remove(@Param('codigo_bolsa') codigo_bolsa: string) {
    return this.pruebaspretransfusionalesService.remove(codigo_bolsa);
  }
}
