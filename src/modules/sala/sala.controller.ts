import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalaService } from './sala.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Sala')
@Controller('sala')
export class SalaController {
  constructor(private readonly salaService: SalaService) { }


  @ApiOperation({ summary: 'Registrar una nueva sala' })
  @ApiResponse({ status: 201, description: 'Sala registrada con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createSalaDto: CreateSalaDto) {
    return this.salaService.create(createSalaDto);
  }


  @ApiOperation({ summary: 'Obtener todas las salas' })
  @ApiResponse({ status: 201, description: 'Salas obtenidas exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.salaService.findAll();
  }


  @ApiOperation({ summary: 'Obtener una sala' })
  @ApiResponse({ status: 201, description: 'Sala obtenida exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salaService.findOne(id);
  }


  @ApiOperation({ summary: 'Actualizar una sala' })
  @ApiResponse({ status: 201, description: 'Sala actualizada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalaDto: UpdateSalaDto) {
    return this.salaService.update(id, updateSalaDto);
  }


  @ApiOperation({ summary: 'Eliminar una sala' })
  @ApiResponse({ status: 201, description: 'Sala eliminada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salaService.remove(id);
  }
}
