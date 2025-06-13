import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ComponentesObtenidosService } from './componentes_obtenidos.service';
import { CreateComponentesObtenidosDto } from './dto/create-componentes_obtenidos.dto';

@Controller('componentes-obtenidos')
export class ComponentesObtenidosController {
  constructor(private readonly service: ComponentesObtenidosService) {}

  @Post()
  async create(@Body() dto: CreateComponentesObtenidosDto) {
    return this.service.create(dto);
  }

@Get('componentes_obtenidos')
async getAllObtenidos() {
  return this.service.getAllObtenidos();
}
@Get('obtenidos')
async getObtenidos() {
  return this.service.getObtenidos();
}
@Patch(':id/desechar')
async desecharComponente(@Param('id') id: string) {
  return this.service.desecharComponente(id);
}
@Patch(':id/liberar')
async liberarComponente(@Param('id') id: string) {
  return this.service.liberarComponente(id);
}
@Get('bajas')
async getBajas() {
  return this.service.findByEstadoObtencion('baja');
}
}