import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PedidosDevolucionesService } from './pedidos_devoluciones.service';
import { CreatePedidosDevolucionDto } from './dto/create-devolucion.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreatePedidosFarmaciaDto } from './dto/create-pedidos_farmacia.dto';
import { CreatePedidosCentralDto } from './dto/create-pedidos_central.dto';
import { CreatePedidosMensualDto } from './dto/create-pedidos_mensual.dto';
import { CreatePedidosViveresDto } from './dto/create-pedidos_viveres.dto';

@ApiTags('Pedidos Devoluciones')
@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosDevolucionesService) {}

  // VIVERES

@Post('devolucion')
async createDevolucion(@Body() body: CreatePedidosDevolucionDto) {

  return this.pedidosService.createDevolucion(body);
}

@Get('devolucion')
findAllDevoluciones() {
  return this.pedidosService.findAllDevoluciones();
}

@Post('viveres')
async createViveres(@Body() body: CreatePedidosViveresDto) {
  return this.pedidosService.createViveres(body);
}

  @Get('viveres')
  findAllViveres() {
    return this.pedidosService.findAllViveres();
  }

  @Get('viveres/:id')
  findOneViveres(@Param('id') id: string) {
    return this.pedidosService.findOneViveres(id);
  }

  @Patch('viveres/:id')
  updateViveres(
    @Param('id') id: string,
    @Body() dto: CreatePedidosViveresDto,
  ) {
    return this.pedidosService.updateViveres(id, dto);
  }

  @Delete('viveres/:id')
  removeViveres(@Param('id') id: string) {
    return this.pedidosService.removeViveres(id);
  }

  // FARMACIA
 @Post('farmacia')
  async createFarmacia(@Body() body: CreatePedidosFarmaciaDto) {
    return this.pedidosService.createFarmacia(body);
  }

  @Get('farmacia')
  findAllFarmacia() {
    return this.pedidosService.findAllFarmacia();
  }

  @Get('farmacia/:id')
  findOneFarmacia(@Param('id') id: string) {
    return this.pedidosService.findOneFarmacia(id);
  }

  @Patch('farmacia/:id')
  updateFarmacia(
    @Param('id') id: string,
    @Body() dto: CreatePedidosFarmaciaDto,
  ) {
    return this.pedidosService.updateFarmacia(id, dto);
  }

  @Delete('farmacia/:id')
  removeFarmacia(@Param('id') id: string) {
    return this.pedidosService.removeFarmacia(id);
  }

  // CENTRAL
@Post('central')
async createCentral(@Body() body: CreatePedidosCentralDto) {
  return this.pedidosService.createCentral(body);
}


  @Get('central')
  findAllCentral() {
    return this.pedidosService.findAllCentral();
  }

  @Get('central/:id')
  findOneCentral(@Param('id') id: string) {
    return this.pedidosService.findOneCentral(id);
  }

  @Patch('central/:id')
  updateCentral(
    @Param('id') id: string,
    @Body() dto: CreatePedidosCentralDto,
  ) {
    return this.pedidosService.updateCentral(id, dto);
  }

  @Delete('central/:id')
  removeCentral(@Param('id') id: string) {
    return this.pedidosService.removeCentral(id);
  }

  // MISCELANEA
@Post('mensual')
async createMensual(@Body() body: CreatePedidosMensualDto) {
  return this.pedidosService.createMensual(body);
}

  @Get('miscelanea')
  findAllMiscelanea() {
    return this.pedidosService.findAllMensual();
  }

  @Get('miscelanea/:id')
  findOneMiscelanea(@Param('id') id: string) {
    return this.pedidosService.findAllMensual();
  }

  @Patch('miscelanea/:id')
  updateMiscelanea(
    @Param('id') id: string,
    @Body() dto: CreatePedidosMensualDto,
  ) {
    return this.pedidosService.updateMensual(id, dto);
  }

  @Delete('miscelanea/:id')
  removeMiscelanea(@Param('id') id: string) {
    return this.pedidosService.removeMensual(id);
  }


}
