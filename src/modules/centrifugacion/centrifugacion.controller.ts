import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CentrifugacionService } from './centrifugacion.service';
import { CreateCentrifugacionDto } from './dto/create-centrifugacion.dto';
import { UpdateCentrifugacionDto } from './dto/update-centrifugacion.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Centrifugacion')
@Controller('centrifugacion')
export class CentrifugacionController {
  constructor(private readonly centrifugacionService: CentrifugacionService) { }


  @ApiOperation({ summary: 'Registrar una nueva centrifugacion' })
  @ApiResponse({ status: 201, description: 'Centrifugacion registrada con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createCentrifugacionDto: CreateCentrifugacionDto) {
    return this.centrifugacionService.create(createCentrifugacionDto);
  }

  @ApiOperation({ summary: 'Obtener todos las centrifugaciones' })
  @ApiResponse({ status: 201, description: 'Centrifugaciones obtenidas exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.centrifugacionService.findAll();
  }

  @ApiOperation({ summary: 'Obtener una centrifugacion' })
  @ApiResponse({ status: 201, description: 'Centrifugacion obtenida exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.centrifugacionService.findOne(id);
  }


  @ApiOperation({ summary: 'Actualizar una centrifugacion' })
  @ApiResponse({ status: 201, description: 'Centrifugacion actualizada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCentrifugacionDto: UpdateCentrifugacionDto) {
    return this.centrifugacionService.update(id, updateCentrifugacionDto);
  }


  @ApiOperation({ summary: 'Eliminar una centrifugacion' })
  @ApiResponse({ status: 201, description: 'Centrifugacion eliminada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.centrifugacionService.remove(id);
  }
}
