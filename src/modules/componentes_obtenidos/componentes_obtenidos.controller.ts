import { Controller, Get, Post, Body, Patch, Param, Query } from '@nestjs/common';
import { ComponentesObtenidosService } from './componentes_obtenidos.service';
import { CreateComponentesObtenidosDto } from './dto/create-componentes_obtenidos.dto';

@Controller('componentes-obtenidos')
export class ComponentesObtenidosController {
  constructor(private readonly service: ComponentesObtenidosService) {}

 @Post()
async create(@Body() body: any) {
  return this.service.createComponente(body);
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
  return this.service.findByEstadoObtencion('desechada');
}
@Get('componentes_obtenidos')
async getComponentesObtenidos(@Query('estado') estado?: string) {
  return this.service.getComponentesObtenidos(estado);
}
}