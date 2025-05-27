import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProvinciaService } from './provincia.service';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Provincia')
@Controller('provincia')
export class ProvinciaController {
  constructor(private readonly provinciaService: ProvinciaService) { }



  @ApiOperation({ summary: 'Registrar una nueva provincia' })
  @ApiResponse({ status: 201, description: 'Provincia registrada con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createProvinciaDto: CreateProvinciaDto) {
    return this.provinciaService.create(createProvinciaDto);
  }


  @ApiOperation({ summary: 'Obtener todas las provincias' })
  @ApiResponse({ status: 201, description: 'Provincias obtenidas exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.provinciaService.findAll();
  }


  @ApiOperation({ summary: 'Obtener una provincia' })
  @ApiResponse({ status: 201, description: 'Provincia obtenida exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.provinciaService.findOne(id);
  }


  @ApiOperation({ summary: 'Actualizar una provincia' })
  @ApiResponse({ status: 201, description: 'Provincia actualizada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProvinciaDto: UpdateProvinciaDto) {
    return this.provinciaService.update(id, updateProvinciaDto);
  }


  @ApiOperation({ summary: 'Eliminar una provincia' })
  @ApiResponse({ status: 201, description: 'Provincia eliminada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.provinciaService.remove(id);
  }
}
