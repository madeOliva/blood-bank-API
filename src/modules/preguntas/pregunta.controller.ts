import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PreguntaService } from './pregunta.service';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Preguntas')
@Controller('preguntas')
export class PreguntaController {
  constructor(private readonly preguntaService: PreguntaService) {}


  @ApiOperation({ summary: 'Registrar una nueva pregunta' })
  @ApiResponse({ status: 201, description: 'Pregunta registrada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createPreguntaDto: CreatePreguntaDto) {
    return this.preguntaService.create(createPreguntaDto);
  }

  @ApiOperation({ summary: 'Obtener todas las preguntas' })
  @ApiResponse({ status: 201, description: 'Preguntas obtenidas exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.preguntaService.findAll();
  }

  @ApiOperation({ summary: 'Obtener una pregunta' })
  @ApiResponse({ status: 201, description: 'Pregunta obtenida exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':pregunta')
  findOne(@Param('pregunta') pregunta:string) {
    return this.preguntaService.findOne(pregunta);
  }

  @ApiOperation({ summary: 'Actualizar una pregunta' })
  @ApiResponse({ status: 201, description: 'Pregunta actualizada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id:string, @Body() updatePreguntaDto: UpdatePreguntaDto) {
    return this.preguntaService.update(id, updatePreguntaDto);
  }

  @ApiOperation({ summary: 'Eliminar una pregunta' })
  @ApiResponse({ status: 201, description: 'Pregunta eliminada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id:string) {
    return this.preguntaService.remove(id);
  }
}
