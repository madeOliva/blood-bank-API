import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RegistroDonacionService } from './registro_donacion.service';
import { CreateRegistroDonacionesDto } from './dto/create-registro_donacion.dto';
import { UpdateRegistroDonacionDto } from './dto/update-registro_donacion.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('Registro de Donación')
@Controller('registro-donacion')
export class RegistroDonacionController {
  constructor(private readonly service: RegistroDonacionService) {}

  @Get()
  @ApiOperation({ summary: 'Obtiene todos los registros de donacion' })
  async findAllDonation(
    @Query('inicio') inicio: string,
    @Query('fin') fin: string,
  ) {
    if (!inicio || !fin) {
      throw new BadRequestException(
        'Debe proporcionar las fechas de inicio y fin',
      );
    }
    const fechaInicio = new Date(inicio);
    const fechaFin = new Date(fin);

    if (isNaN(fechaInicio.getTime()) || isNaN(fechaFin.getTime())) {
      throw new BadRequestException('Formato de fecha inválido');
    }

    return this.service.findByRangoFechas(fechaInicio, fechaFin);
  }

  @Post()
  @ApiOperation({ summary: 'Crea un nuevo registro' })
  async create(@Body() createDto: CreateRegistroDonacionesDto) {
    return this.service.create(createDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtiene un registro por ID' })
  async getOne(@Param('id') id: string) {
    return this.service.getOne(id);
  }

  @ApiOperation({ summary: 'Actualizar un registro de donación' })
  @ApiResponse({
    status: 200,
    description: 'Registro actualizado exitosamente',
  })
  @ApiResponse({ status: 404, description: 'Registro no encontrado' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID del registro a actualizar',
  })
  @Put(':id')
  update(
    @Body() updateRegistroDonacionDto: UpdateRegistroDonacionDto,
    @Param('id') id: string,
  ) {
    return this.service.update(id, updateRegistroDonacionDto);
  }

  @ApiOperation({ summary: 'Eliminar un registro de donación' })
  @ApiResponse({ status: 200, description: 'Registro eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Registro no encontrado' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID del registro a eliminar',
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}