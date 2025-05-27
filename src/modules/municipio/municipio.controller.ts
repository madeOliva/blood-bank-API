import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Municipio')
@Controller('municipio')
export class MunicipioController {
  constructor(private readonly municipioService: MunicipioService) { }

  @ApiOperation({ summary: 'Registrar un nuevo componente' })
  @ApiResponse({ status: 201, description: 'Componente registrado con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createMunicipioDto: CreateMunicipioDto) {
    return this.municipioService.create(createMunicipioDto);
  }

  @ApiOperation({ summary: 'Obtener todos los componentes' })
  @ApiResponse({ status: 201, description: 'Componentes obtenidos exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.municipioService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un componente' })
  @ApiResponse({ status: 201, description: 'Componente obtenido exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.municipioService.findOne(name);
  }

  @ApiOperation({ summary: 'Actualizar un componente' })
  @ApiResponse({ status: 201, description: 'Componente actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMunicipioDto: UpdateMunicipioDto) {
    return this.municipioService.update(id, updateMunicipioDto);
  }

  @ApiOperation({ summary: 'Eliminar un componente' })
  @ApiResponse({ status: 201, description: 'Componente eliminado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.municipioService.remove(id);
  }
}
