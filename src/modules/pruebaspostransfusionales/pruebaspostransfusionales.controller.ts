import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PruebaspostransfusionalesService } from './pruebaspostransfusionales.service';
import { CreatePruebaspostransfusionaleDto } from './dto/create-pruebaspostransfusionale.dto';
import { UpdatePruebaspostransfusionaleDto } from './dto/update-pruebaspostransfusionale.dto';

@Controller('pruebaspostransfusionales')
export class PruebaspostransfusionalesController {
  constructor(private readonly pruebaspostransfusionalesService: PruebaspostransfusionalesService) {}

  @Post()
  create(@Body() createPruebaspostransfusionaleDto: CreatePruebaspostransfusionaleDto) {
    return this.pruebaspostransfusionalesService.create(createPruebaspostransfusionaleDto);
  }

  @Get()
  findAll() {
    return this.pruebaspostransfusionalesService.findAll();
  }

  @Get(':codigo_bolsa')
  findOne(@Param('codigo_bolsa') codigo_bolsa: string) {
    return this.pruebaspostransfusionalesService.findOne(codigo_bolsa);
  }

  @Patch(':codigo_bolsa')
  update(@Param('codigo_bolsa') codigo_bolsa: string, @Body() updatePruebaspostransfusionaleDto: UpdatePruebaspostransfusionaleDto) {
    return this.pruebaspostransfusionalesService.update(codigo_bolsa, updatePruebaspostransfusionaleDto);
  }

  @Delete(':codigo_bolsa')
  remove(@Param('codigo_bolsa') codigo_bolsa: string) {
    return this.pruebaspostransfusionalesService.remove(codigo_bolsa);
  }
}
