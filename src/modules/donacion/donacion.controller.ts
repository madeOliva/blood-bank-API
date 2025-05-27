import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DonacionService } from './donacion.service';
import { CreateDonacionDto } from './dto/create-donacion.dto';
import { UpdateDonacionDto } from './dto/update-donacion.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Donación')
@Controller('donacion')
export class DonacionController {
  constructor(private readonly DonacionService: DonacionService) { }

  @ApiOperation({ summary: 'Obtener todas las donaciones' })
  @ApiResponse({ status: 201, description: 'Donaciones obtenidas exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.DonacionService.getAll();
  }

  @ApiOperation({ summary: 'Obtener una donacion' })
  @ApiResponse({ status: 201, description: 'Donacion obtenida exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.DonacionService.getOne(id);
  }

  @ApiOperation({ summary: 'Registrar una nueva donacion' })
  @ApiResponse({ status: 201, description: 'Donacion registrada con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() body: CreateDonacionDto) {
    return this.DonacionService.create(body);
  }

  @ApiOperation({ summary: 'Actualizar una donacion ' })
  @ApiResponse({ status: 201, description: 'Donacion actualizada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Put(':id')
  update(@Body() body: UpdateDonacionDto, @Param('id') id: string) {
    return this.DonacionService.update(body, id);
  }

  @ApiOperation({ summary: 'Eliminar una donacion' })
  @ApiResponse({ status: 201, description: 'Donacion eliminada exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.DonacionService.delete(id);
  }
}
