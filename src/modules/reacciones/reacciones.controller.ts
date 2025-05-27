import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReaccionesService } from './reacciones.service';
import { CreateReaccionDto } from './dto/create-reacciones.dto';
import { UpdateReaccionDto } from './dto/update-reacciones.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Reacciones')
@Controller('reacciones')
export class ReaccionesController {
  constructor(private readonly reaccionesService: ReaccionesService) { }

  @ApiOperation({ summary: 'Obtener todas las reacciones' })
  @ApiResponse({ status: 201, description: 'Reacciones obtenidas exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.reaccionesService.getAll();
  }

  @ApiOperation({ summary: 'Obtener una reaccion' })
  @ApiResponse({ status: 201, description: 'Reaccion obtenida exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reaccionesService.getOne(id);
  }

  @ApiOperation({ summary: 'Registrar una nueva reaccion' })
  @ApiResponse({ status: 201, description: 'Reaccion registrada con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() body: CreateReaccionDto) {
    return this.reaccionesService.create(body);
  }

  @ApiOperation({ summary: 'Actualizar una reaccion ' })
  @ApiResponse({ status: 201, description: 'Reaccion actualizada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Put(':id')
  update(@Body() body: UpdateReaccionDto, @Param('id') id: string) {
    return this.reaccionesService.update(body, id);
  }

  @ApiOperation({ summary: 'Eliminar una reaccion' })
  @ApiResponse({ status: 201, description: 'Reaccion eliminada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.reaccionesService.delete(id);
  }
}
