import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipocomponentehabitualService } from './tipocomponentehabitual.service';
import { CreateTipocomponentehabitualDto } from './dto/create-tipocomponentehabitual.dto';
import { UpdateTipocomponentehabitualDto } from './dto/update-tipocomponentehabitual.dto';

@Controller('tipocomponentehabitual')
export class TipocomponentehabitualController {
  constructor(private readonly tipocomponentehabitualService: TipocomponentehabitualService) {}

  @Post()
  create(@Body() createTipocomponentehabitualDto: CreateTipocomponentehabitualDto) {
    return this.tipocomponentehabitualService.create(createTipocomponentehabitualDto);
  }

  @Get()
  findAll() {
    return this.tipocomponentehabitualService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipocomponentehabitualService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipocomponentehabitualDto: UpdateTipocomponentehabitualDto) {
    return this.tipocomponentehabitualService.update(+id, updateTipocomponentehabitualDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipocomponentehabitualService.remove(+id);
  }
}
