import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CalidadService } from './calidad.service';
import { CreateCalidadDto } from './dto/create-calidad.dto';
import { UpdateCalidadDto } from './dto/update-calidad.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Calidad')
@Controller('/calidad')
export class CalidadController {
  constructor(private readonly calidadService: CalidadService) { }


  @ApiOperation({ summary: 'Registrar una nueva calidad' })
  @ApiResponse({ status: 201, description: 'Calidad registrada con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createCalidadDto: CreateCalidadDto) {
    return this.calidadService.create(createCalidadDto);
  }

  @ApiOperation({ summary: 'Obtener todos las calidades' })
  @ApiResponse({ status: 201, description: 'Calidades obtenidos exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.calidadService.findAll();
  }


  @ApiOperation({ summary: 'Obtener una calidad' })
  @ApiResponse({ status: 201, description: 'Calidad obtenida exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':calidad')
  findOne(@Param('calidad') calidad: string) {
    return this.calidadService.findOne(calidad);
  }


  @ApiOperation({ summary: 'Actualizar una calidad' })
  @ApiResponse({ status: 201, description: 'Calidad actualizada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalidadDto: UpdateCalidadDto) {
    return this.calidadService.update(id, updateCalidadDto);
  }


  @ApiOperation({ summary: 'Eliminar una calidad' })
  @ApiResponse({ status: 201, description: 'Calidad eliminada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calidadService.remove(id);
  }
}
