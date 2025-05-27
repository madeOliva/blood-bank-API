import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipocomponenteService } from './tipocomponente.service';
import { CreateTipocomponenteDto } from './dto/create-tipocomponente.dto';
import { UpdateTipocomponenteDto } from './dto/update-tipocomponente.dto';

@Controller('tipocomponente')
export class TipocomponenteController {
  constructor(private readonly tipocomponenteService: TipocomponenteService) {}

  @Post()
  create(@Body() createTipocomponenteDto: CreateTipocomponenteDto) {
    return this.tipocomponenteService.create(createTipocomponenteDto);
  }

  @Get()
  findAll() {
    return this.tipocomponenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipocomponenteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipocomponenteDto: UpdateTipocomponenteDto) {
    return this.tipocomponenteService.update(+id, updateTipocomponenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipocomponenteService.remove(+id);
  }
}
