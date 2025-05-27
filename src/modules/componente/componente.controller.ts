import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComponenteService } from './componente.service';
import { CreateComponenteDto } from './dto/create-componente.dto';
import { UpdateComponenteDto } from './dto/update-componente.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Componente')
@Controller('componente')
export class ComponenteController {
  constructor(private readonly componenteService: ComponenteService) { }


  @ApiOperation({ summary: 'Registrar un nuevo componente' })
  @ApiResponse({ status: 201, description: 'Componente registrado con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createComponenteDto: CreateComponenteDto) {
    return this.componenteService.create(createComponenteDto);
  }


  @ApiOperation({ summary: 'Obtener todos los componentes' })
  @ApiResponse({ status: 201, description: 'Componentes obtenidos exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.componenteService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un componente' })
  @ApiResponse({ status: 201, description: 'Componente obtenido exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componenteService.findOne(id);
  }


  @ApiOperation({ summary: 'Actualizar un componente' })
  @ApiResponse({ status: 201, description: 'Componente actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComponenteDto: UpdateComponenteDto) {
    return this.componenteService.update(id, updateComponenteDto);
  }


  @ApiOperation({ summary: 'Eliminar un componente' })
  @ApiResponse({ status: 201, description: 'Componente eliminado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.componenteService.remove(id);
  }
}
