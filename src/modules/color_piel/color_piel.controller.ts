import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColorPielService } from './color_piel.service';
import { CreateColorPielDto } from './dto/create-color_piel.dto';
import { UpdateColorPielDto } from './dto/update-color_piel.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Color de piel')
@Controller('/color-piel')
export class ColorPielController {
    constructor(private readonly color_pielService: ColorPielService) { }


    @ApiOperation({ summary: 'Registrar un nuevo color de piel' })
    @ApiResponse({ status: 201, description: 'Color de piel registrado con exito' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @Post()
    create(@Body() createColorPielDto: CreateColorPielDto) {
        return this.color_pielService.create(createColorPielDto);
    }

    @ApiOperation({ summary: 'Obtener todos los colores de piel' })
    @ApiResponse({ status: 201, description: 'Colores de piel obtenidos exitosamente' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @Get()
    findAll() {
        return this.color_pielService.findAll();
    }

    @ApiOperation({ summary: 'Obtener un color de piel' })
    @ApiResponse({ status: 201, description: 'Color de piel obtenido exitosamente' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.color_pielService.findOne(id);
    }

    @ApiOperation({ summary: 'Actualizar un color de piel' })
    @ApiResponse({ status: 201, description: 'Color de piel actualizado exitosamente' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateColorPiel: UpdateColorPielDto) {
        return this.color_pielService.update(id, updateColorPiel);
    }

    @ApiOperation({ summary: 'Eliminar un color de piel' })
    @ApiResponse({ status: 201, description: 'Color de piel eliminado exitosamente' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.color_pielService.remove(id);
    }
}
