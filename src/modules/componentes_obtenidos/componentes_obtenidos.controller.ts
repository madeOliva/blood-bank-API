import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComponentesObtenidosService } from './componentes_obtenidos.service';
import { CreateComponentesObtenidosDto } from './dto/create-componentes_obtenidos.dto';
import { UpdateComponentesObtenidosDto } from './dto/update-componentes_obtenidos.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Componentes obtenidos')
@Controller('componentes-obtenidos')
export class ComponentesObtenidosController {
  constructor(private readonly componentesObtenidosService: ComponentesObtenidosService) { }


  @ApiOperation({ summary: 'Registrar un nuevo componente obtenido' })
  @ApiResponse({ status: 201, description: 'Componente obtenido registrado con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createComponentesObtenidosDto: CreateComponentesObtenidosDto) {
    return this.componentesObtenidosService.create(createComponentesObtenidosDto);
  }


  @ApiOperation({ summary: 'Obtener todos los componentes con estado obtenido' })
  @ApiResponse({ status: 200, description: 'Componentes con estado obtenido retornados exitosamente' })
  @Get('obtenidos')
  findAllObtenidos() {
    return this.componentesObtenidosService.findAllObtenidos();
  }

  @ApiOperation({ summary: 'Obtener todos los componentes con estado baja' })
  @ApiResponse({ status: 200, description: 'Componentes con estado baja retornados exitosamente' })
  @Get('bajas')
  findAllBaja() {
    return this.componentesObtenidosService.findAllBaja();
  }

  @ApiOperation({ summary: 'Obtener un componente' })
  @ApiResponse({ status: 201, description: 'Componente obtenido exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componentesObtenidosService.findOne(id);
  }


  @ApiOperation({ summary: 'Actualizar un componente' })
  @ApiResponse({ status: 201, description: 'Componente actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComponentesObtenidosDto: UpdateComponentesObtenidosDto) {
    return this.componentesObtenidosService.update(id, updateComponentesObtenidosDto);
  }


  @ApiOperation({ summary: 'Eliminar un componente obtenido' })
  @ApiResponse({ status: 201, description: 'Componente eliminado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.componentesObtenidosService.remove(id);
  }
}
