import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransfusionesService } from './transfusiones.service';
import { CreateTransfusionesDto } from './dto/create-transfusiones.dto';
import { UpdateTransfusionesDto } from './dto/update-transfusiones.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Transfusiones')
@Controller('transfusiones')
export class TransfusionesController {
  constructor(private readonly transfusionesService: TransfusionesService) { }


  @ApiOperation({ summary: 'Registrar una nueva transfusion' })
  @ApiResponse({ status: 201, description: 'Transfusion registrada con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createTransfusionesDto: CreateTransfusionesDto) {
    return this.transfusionesService.create(createTransfusionesDto);
  }

  @ApiOperation({ summary: 'Obtener todas las transfusiones' })
  @ApiResponse({ status: 201, description: 'Transfusiones obtenidas exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.transfusionesService.findAll();
  }

  @ApiOperation({ summary: 'Obtener una transfusion' })
  @ApiResponse({ status: 201, description: 'Transfusion obtenida exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transfusionesService.findOne(id);
  }

  @ApiOperation({ summary: 'Actualizar una transfusion' })
  @ApiResponse({ status: 201, description: 'Transfusion actualizada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransfusionesDto: UpdateTransfusionesDto) {
    return this.transfusionesService.update(id, updateTransfusionesDto);
  }

  @ApiOperation({ summary: 'Eliminar una transfusion' })
  @ApiResponse({ status: 201, description: 'Transfusion eliminada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transfusionesService.remove(id);
  }
}
