import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoCivilService } from './estado_civil.service';
import { CreateEstadoCivilDto } from './dto/create-estado_civil.dto';
import { UpdateEstadoCivilDto } from './dto/update-estado_civil.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Estado civil ')
@Controller('estado-civil')
export class EstadoCivilController {
  constructor(private readonly estadoCivilService: EstadoCivilService) { }


  @ApiOperation({ summary: 'Registrar un nuevo estado civil' })
  @ApiResponse({ status: 201, description: 'Estado civil registrado con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createEstadoCivilDto: CreateEstadoCivilDto) {
    return this.estadoCivilService.create(createEstadoCivilDto);
  }


  @ApiOperation({ summary: 'Obtener todos los estados civiles' })
  @ApiResponse({ status: 201, description: 'Estados civiles obtenidos exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.estadoCivilService.findAll();
  }


  @ApiOperation({ summary: 'Obtener un estado civil' })
  @ApiResponse({ status: 201, description: 'Estado civil obtenido exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoCivilService.findOne(id);
  }


  @ApiOperation({ summary: 'Actualizar un estado civil' })
  @ApiResponse({ status: 201, description: 'Estado civil actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadoCivilDto: UpdateEstadoCivilDto) {
    return this.estadoCivilService.update(id, updateEstadoCivilDto);
  }


  @ApiOperation({ summary: 'Eliminar un estado civil' })
  @ApiResponse({ status: 201, description: 'Estado civil eliminado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoCivilService.remove(id);
  }
}
