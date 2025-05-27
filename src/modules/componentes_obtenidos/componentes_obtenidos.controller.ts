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

  @ApiOperation({ summary: 'Obtener todos los componentes obtenidos' })
  @ApiResponse({ status: 201, description: 'Componentes obtenidos exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.componentesObtenidosService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un componente obtenido' })
  @ApiResponse({ status: 201, description: 'Componente obtenido exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componentesObtenidosService.findOne(id);
  }


  @ApiOperation({ summary: 'Actualizar un componente obtenido' })
  @ApiResponse({ status: 201, description: 'Componente obtenido actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComponentesObtenidosDto: UpdateComponentesObtenidosDto) {
    return this.componentesObtenidosService.update(id, updateComponentesObtenidosDto);
  }


  @ApiOperation({ summary: 'Eliminar un componente obtenido' })
  @ApiResponse({ status: 201, description: 'Componente obtenido eliminado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.componentesObtenidosService.remove(id);
  }
}
