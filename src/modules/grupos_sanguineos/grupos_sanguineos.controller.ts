import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GruposSanguineosService } from './grupos_sanguineos.service';
import { CreateGrupoSanguineoDto } from './dto/create-grupos_sanguineo.dto';
import { UpdateGrupoSanguineoDto } from './dto/update-grupos_sanguineo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Grupos Sanguíneos')
@Controller('grupos-sanguineos')
export class GruposSanguineosController {
  constructor(private readonly gruposSanguineosService: GruposSanguineosService) {}

  @ApiOperation({ summary: 'Registrar un nuevo grupo sanguineo' })
    @ApiResponse({ status: 201, description: 'grupo sanguineo registrado con exito' })
    @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createGruposSanguineoDto: CreateGrupoSanguineoDto) {
    return this.gruposSanguineosService.create(createGruposSanguineoDto);
  }

  @ApiOperation({ summary: 'Obtener todos los grupo sanguineos' })
  @ApiResponse({ status: 201, description: 'grupo sanguineos obtenidos exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.gruposSanguineosService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un grupo sanguineo' })
  @ApiResponse({ status: 201, description: 'grupo sanguineo obtenido exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gruposSanguineosService.findOne(id);
  }

  @ApiOperation({ summary: 'Actualizar un grupo sanguineo' })
  @ApiResponse({ status: 201, description: 'grupo sanguineo actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGruposSanguineoDto: UpdateGrupoSanguineoDto) {
    return this.gruposSanguineosService.update(id, updateGruposSanguineoDto);
  }

  @ApiOperation({ summary: 'Eliminar un grupo sanguineo' })
  @ApiResponse({ status: 201, description: 'grupo sanguineo eliminado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gruposSanguineosService.remove(id);
  }
}
