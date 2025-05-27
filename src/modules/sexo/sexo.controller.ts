import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SexoService } from './sexo.service';
import { CreateSexoDto } from './dto/create-sexo.dto';
import { UpdateSexoDto } from './dto/update-sexo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Sexo')
@Controller('sexo')
export class SexoController {
  constructor(private readonly sexoService: SexoService) { }

  @ApiOperation({ summary: 'Registrar un nuevo sexo' })
  @ApiResponse({ status: 201, description: 'Sexo registrado con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createSexoDto: CreateSexoDto) {
    return this.sexoService.create(createSexoDto);
  }

  @ApiOperation({ summary: 'Obtener todos los sexos' })
  @ApiResponse({ status: 201, description: 'Sexos obtenidos exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.sexoService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un sexo' })
  @ApiResponse({ status: 201, description: 'Sexo obtenido exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sexoService.findOne(id);
  }

  @ApiOperation({ summary: 'Actualizar un sexo' })
  @ApiResponse({ status: 201, description: 'Sexo actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSexoDto: UpdateSexoDto) {
    return this.sexoService.update(id, updateSexoDto);
  }

  @ApiOperation({ summary: 'Eliminar un sexo' })
  @ApiResponse({ status: 201, description: 'Sexo eliminado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sexoService.remove(id);
  }
}
