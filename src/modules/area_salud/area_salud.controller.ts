import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AreaSaludService } from './area_salud.service';
import { CreateAreaSaludDto } from './dto/create-area_salud.dto';
import { UpdateAreaSaludDto } from './dto/update-area_salud.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Area de salud')
@Controller('/area-salud')
export class AreaSaludController {
  constructor(private readonly areaSaludService: AreaSaludService) { }

  @ApiOperation({ summary: 'Registrar una nueva area de salud' })
  @ApiResponse({ status: 201, description: 'Area de salud registrada con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createAreaSaludDto: CreateAreaSaludDto) {
    return this.areaSaludService.create(createAreaSaludDto);
  }

  @ApiOperation({ summary: 'Obtener todos las areas de salud' })
  @ApiResponse({ status: 201, description: 'Areas de salud obtenidos exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.areaSaludService.findAll();
  }

  @ApiOperation({ summary: 'Obtener una area de salud' })
  @ApiResponse({ status: 201, description: 'Area de salud obtenida exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.areaSaludService.findOne(name);
  }

  @ApiOperation({ summary: 'Actualizar una area de salud' })
  @ApiResponse({ status: 201, description: 'Area de salud actualizada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAreaSaludDto: UpdateAreaSaludDto) {
    return this.areaSaludService.update(id, updateAreaSaludDto);
  }

  @ApiOperation({ summary: 'Eliminar una area de salud' })
  @ApiResponse({ status: 201, description: 'Area de salud eliminada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.areaSaludService.remove(id);
  }
}
