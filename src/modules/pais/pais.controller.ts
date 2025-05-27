import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaisService } from './pais.service';
import { CreatePaiDto } from './dto/create-pai.dto';
import { UpdatePaiDto } from './dto/update-pai.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Pais')
@Controller('/pais')
export class PaisController {
  constructor(private readonly paisService: PaisService) { }


  @ApiOperation({ summary: 'Registrar un nuevo pais' })
  @ApiResponse({ status: 201, description: 'Pais registrado con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createPaiDto: CreatePaiDto) {
    return this.paisService.create(createPaiDto);
  }


  @ApiOperation({ summary: 'Obtener todos los paises' })
  @ApiResponse({ status: 201, description: 'Paises obtenidos exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.paisService.findAll();
  }


  @ApiOperation({ summary: 'Obtener un pais' })
  @ApiResponse({ status: 201, description: 'Pais obtenido exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':pais')
  findOne(@Param('pais') pais: string) {
    return this.paisService.findOne(pais);
  }


  @ApiOperation({ summary: 'Actualizar un pais' })
  @ApiResponse({ status: 201, description: 'Pais actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id_pais: string, @Body() updatePaiDto: UpdatePaiDto) {
    return this.paisService.update(id_pais, updatePaiDto);
  }


  @ApiOperation({ summary: 'Eliminar un pais' })
  @ApiResponse({ status: 201, description: 'Pais eliminado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id_pais: string) {
    return this.paisService.remove(id_pais);
  }
}
