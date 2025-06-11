import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FactoresService } from './factores.service';
import { CreateFactoresDto } from './dto/create-factore.dto';
import { UpdateFactoresDto } from './dto/update-factore.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Factores')
@Controller('factores')
export class FactoresController {
  constructor(private readonly factoresService: FactoresService) {}

  @ApiOperation({ summary: 'Registrar un nuevo factor' })
  @ApiResponse({ status: 201, description: 'factor registrado con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createFactoreDto: CreateFactoresDto) {
    return this.factoresService.create(createFactoreDto);
  }

  @ApiOperation({ summary: 'Obtener todos los factores' })
  @ApiResponse({ status: 201, description: 'factores obtenidos exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.factoresService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un factor' })
  @ApiResponse({ status: 201, description: 'factor obtenido exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factoresService.findOne(id);
  }

  @ApiOperation({ summary: 'Actualizar un factor' })
  @ApiResponse({ status: 201, description: 'factor actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactoreDto: UpdateFactoresDto) {
    return this.factoresService.update(id, updateFactoreDto);
  }

  @ApiOperation({ summary: 'Eliminar un factor' })
  @ApiResponse({ status: 201, description: 'factor eliminado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factoresService.remove(id);
  }
}
