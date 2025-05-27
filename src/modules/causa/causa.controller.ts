import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CausaService } from './causa.service';
import { CreateCausaDto } from './dto/create-causa.dto';
import { UpdateCausaDto } from './dto/update-causa.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Causa')
@Controller('causa')
export class CausaController {
  constructor(private readonly causaService: CausaService) { }


  @ApiOperation({ summary: 'Registrar una nueva causa' })
  @ApiResponse({ status: 201, description: 'Causa registrada con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createCausaDto: CreateCausaDto) {
    return this.causaService.create(createCausaDto);
  }


  @ApiOperation({ summary: 'Obtener todas las causas' })
  @ApiResponse({ status: 201, description: 'Causas obtenidas exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.causaService.findAll();
  }


  @ApiOperation({ summary: 'Obtener una causa' })
  @ApiResponse({ status: 201, description: 'Causa obtenida exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.causaService.findOne(id);
  }


  @ApiOperation({ summary: 'Actualizar una causa' })
  @ApiResponse({ status: 201, description: 'Causa actualizada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCausaDto: UpdateCausaDto) {
    return this.causaService.update(id, updateCausaDto);
  }

  @ApiOperation({ summary: 'Eliminar una causa' })
  @ApiResponse({ status: 201, description: 'Causa eliminada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.causaService.remove(id);
  }
}
