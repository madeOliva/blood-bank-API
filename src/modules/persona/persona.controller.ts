import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PersonaResponseDto } from './dto/persona-response.dto';

@ApiTags('Persona')
@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) { }


  @ApiOperation({ summary: 'Registrar una nueva persona' })
  @ApiResponse({ status: 201, description: 'Persona registrada con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createPersonaDto: CreatePersonaDto) {
    return this.personaService.create(createPersonaDto);
  }


  @ApiOperation({ summary: 'Obtener todas las personas' })
  @ApiResponse({ status: 201, description: 'Personas obtenidas exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.personaService.findAll();
  }

 @Get('todas')
  @ApiOperation({ 
    summary: 'Obtener listado de personas', 
    description: 'Devuelve un arreglo con todas las personas registradas, incluyendo solo datos básicos' 
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Listado de personas obtenido correctamente',
    type: [PersonaResponseDto]
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Error interno del servidor' 
  })
  async getPersonas() {
    return this.personaService.getPersonas();
  }


  @ApiOperation({ summary: 'Obtener una persona' })
  @ApiResponse({ status: 201, description: 'Persona obtenida exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personaService.findOne(id);
  }

  @ApiOperation({ summary: 'Actualizar una persona' })
  @ApiResponse({ status: 201, description: 'Persona actualizada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdatePersonaDto: UpdatePersonaDto) {
    return this.personaService.update(id, UpdatePersonaDto);
  }


  @ApiOperation({ summary: 'Eliminar una persona' })
  @ApiResponse({ status: 201, description: 'Persona eliminada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personaService.remove(id);
  }
}
