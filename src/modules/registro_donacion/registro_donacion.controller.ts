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
  constructor(private readonly service: RegistroDonacionService) { }

  @Get()
  @ApiOperation({ summary: 'Obtiene todos los registros por cédula' })
  @ApiParam({ name: 'ci', type: String })
  async getAll(@Query('ci') ci: string) {
    if (!ci) throw new BadRequestException('El parámetro ci es requerido');
    return this.service.getAll(ci);
  }

  @Get('find')
  async findAll() {
    return this.service.findAll();
  }

  @Get('datos')
  @ApiOperation({
    summary: 'Obtiene datos combinados de persona y registro de donación',
  })
  @ApiResponse({
    status: 200,
    description: 'Datos combinados obtenidos exitosamente',
  })
  async getDatosCompletos() {
    return this.service.getDatosCompletos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtiene un registro por ID' })
  async getOne(@Param('id') id: string) {
    return this.service.getOne(id);
  }

  @Post(':ci')
  @ApiOperation({ summary: 'Crea un nuevo registro' })
  async create(
    @Param('ci') ci: string,
    @Body() createDto: CreateRegistroDonacionesDto,
  ) {
    return this.service.create(ci, createDto);
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



  /*@Get('datos-completos/:ci')
  @ApiOperation({ summary: 'Obtiene todos los datos relacionados con una donación' })
  @ApiResponse({ 
    status: 200, 
    description: 'Datos completos obtenidos exitosamente',
    type: Object // Puedes crear un DTO específico para esto
  })
  async getDatosCompletos(@Param('ci') ci: string) {
    return this.service.getDatosCompletosDonacion(ci);
  }*/
}
