import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AntecedentesPersonalesService } from './antecedentes_personales.service';
import { CreateAntecedentesPersonaleDto } from './dto/create-antecedentes_personale.dto';
import { UpdateAntecedentesPersonaleDto } from './dto/update-antecedentes_personale.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Antecedentes Personales')
@Controller('antecedentes-personales')
export class AntecedentesPersonalesController {
  constructor(private readonly antecedentesPersonalesService: AntecedentesPersonalesService) { }


  @Post()
  @ApiOperation({ summary: 'Registrar un nuevo antecedente personal' })
  @ApiResponse({ status: 201, description: 'Antecente personal registrado con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createAntecedentesPersonaleDto: CreateAntecedentesPersonaleDto) {
    return this.antecedentesPersonalesService.create(createAntecedentesPersonaleDto);
  }


  @ApiOperation({ summary: 'Obtener todos los antecedentes personales' })
  @ApiResponse({ status: 201, description: 'Antecedentes personales obtenidos exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.antecedentesPersonalesService.findAll();
  }


  @ApiOperation({ summary: 'Obtener una antecedente personal' })
  @ApiResponse({ status: 201, description: 'Antecedente personal obtenido exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.antecedentesPersonalesService.findOne(id);
  }


  @ApiOperation({ summary: 'Actualizar un antecedente personal' })
  @ApiResponse({ status: 201, description: 'Antecedente personal actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAntecedentesPersonaleDto: UpdateAntecedentesPersonaleDto) {
    return this.antecedentesPersonalesService.update(id, updateAntecedentesPersonaleDto);
  }


  @ApiOperation({ summary: 'Eliminar un antecedente personal' })
  @ApiResponse({ status: 201, description: 'Antecedente personal eliminado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.antecedentesPersonalesService.remove(id);
  }
}
