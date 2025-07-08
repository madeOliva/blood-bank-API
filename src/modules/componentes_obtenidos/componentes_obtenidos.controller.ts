import { Controller, Get, Post, Body, Patch, Param, Query } from '@nestjs/common';
import { ComponentesObtenidosService } from './componentes_obtenidos.service';
import { CreateComponentesObtenidosDto } from './dto/create-componentes_obtenidos.dto';

@Controller('componentes-obtenidos')
export class ComponentesObtenidosController {
  constructor(private readonly service: ComponentesObtenidosService) {}

@Post()
create(@Body() createDto: CreateComponentesObtenidosDto) {
  console.log('DTO recibido:', createDto); // <-- agrega esto temporalmente
  return this.service.create(createDto);
}
// Ejemplo de controller PATCH
@Patch('lote/:id')
async actualizarNoLote(
  @Param('id') id: string,
  @Body('no_lote') no_lote: string,
  @Body('envio_industria') envio_industria: boolean
) {
  return this.service.actualizarNoLotePorComponenteId(id, no_lote, envio_industria);
}


@Patch(':id/estado')
async actualizarEstado(
  @Param('id') id: string,
  @Body('estado_obtencion') estado_obtencion: string,
  @Body('causa_baja') causa_baja?: string,
) {
  console.log({ id, estado_obtencion, causa_baja }); // <-- agrega esto
  return this.service.actualizarEstadoComponente(id, estado_obtencion, causa_baja);
}

@Get('ids')
async getRegistrosDonacionUsados() {
  const usados = await this.service.getRegistrosDonacionUsados();
  return usados;
}
@Get('bajas')
async getBajas(@Query('estado') estado?: string) {
  // Si se pasa el query ?estado=baja o ?estado=desechada, lo usa; si no, por defecto "desechada"
  return this.service.getComponentesObtenidos(estado ?? 'desechada');
}

@Patch(':id/desechar')
async desecharComponente(@Param('id') id: string) {
  return this.service.actualizarEstadoComponente(id, 'desechada');
}

@Patch(':id/liberar')
async liberarComponente(@Param('id') id: string) {
  return this.service.actualizarEstadoComponente(id, 'liberado');
}
@Get('componentes_obtenidos')
async getComponentesObtenidos(@Query('estado') estado?: string) {
  return this.service.getComponentesObtenidos(estado);
}
}