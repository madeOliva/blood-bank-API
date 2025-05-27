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
import { CreatePedidosDevolucionesDto } from './dto/create-pedidos_devolucione.dto';
import { UpdatePedidosDevolucionesDto } from './dto/update-pedidos_devolucione.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pedidos Devoluciones')
@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosDevolucionesService) {}

  // VIVERES
  @Post('viveres')
  createViveres(@Body() dto: CreatePedidosDevolucionesDto) {
    return this.pedidosService.createViveres(dto);
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
    @Body() dto: UpdatePedidosDevolucionesDto,
  ) {
    return this.pedidosService.updateViveres(id, dto);
  }

  @Delete('viveres/:id')
  removeViveres(@Param('id') id: string) {
    return this.pedidosService.removeViveres(id);
  }

  // FARMACIA
  @Post('farmacia')
  createFarmacia(@Body() dto: CreatePedidosDevolucionesDto) {
    return this.pedidosService.createFarmacia(dto);
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
    @Body() dto: UpdatePedidosDevolucionesDto,
  ) {
    return this.pedidosService.updateFarmacia(id, dto);
  }

  @Delete('farmacia/:id')
  removeFarmacia(@Param('id') id: string) {
    return this.pedidosService.removeFarmacia(id);
  }

  // CENTRAL
  @Post('central')
  createCentral(@Body() dto: CreatePedidosDevolucionesDto) {
    return this.pedidosService.createCentral(dto);
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
    @Body() dto: UpdatePedidosDevolucionesDto,
  ) {
    return this.pedidosService.updateCentral(id, dto);
  }

  @Delete('central/:id')
  removeCentral(@Param('id') id: string) {
    return this.pedidosService.removeCentral(id);
  }

  // MISCELANEA
  @Post('miscelanea')
  createMiscelanea(@Body() dto: CreatePedidosDevolucionesDto) {
    return this.pedidosService.createMiscelanea(dto);
  }

  @Get('miscelanea')
  findAllMiscelanea() {
    return this.pedidosService.findAllMiscelanea();
  }

  @Get('miscelanea/:id')
  findOneMiscelanea(@Param('id') id: string) {
    return this.pedidosService.findOneMiscelanea(id);
  }

  @Patch('miscelanea/:id')
  updateMiscelanea(
    @Param('id') id: string,
    @Body() dto: UpdatePedidosDevolucionesDto,
  ) {
    return this.pedidosService.updateMiscelanea(id, dto);
  }

  @Delete('miscelanea/:id')
  removeMiscelanea(@Param('id') id: string) {
    return this.pedidosService.removeMiscelanea(id);
  }
}
