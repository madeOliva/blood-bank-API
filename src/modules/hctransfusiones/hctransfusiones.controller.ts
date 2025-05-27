import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HctransfusionesService } from './hctransfusiones.service';
import { CreateHctransfusioneDto } from './dto/create-hctransfusione.dto';
import { UpdateHctransfusioneDto } from './dto/update-hctransfusione.dto';

@Controller('hctransfusiones')
export class HctransfusionesController {
  constructor(private readonly hctransfusionesService: HctransfusionesService) {}

  @Post()
  create(@Body() createHctransfusioneDto: CreateHctransfusioneDto) {
    return this.hctransfusionesService.create(createHctransfusioneDto);
  }

  @Get()
  findAll() {
    return this.hctransfusionesService.findAll();
  }

  @Get(':estado_transfusion')
  findOne(@Param('estado_transfusion') estado_transfusion: string) {
    return this.hctransfusionesService.findOne(estado_transfusion);
  }

  @Patch(':estado_transfusion')
  update(@Param('estado_transfusion') estado_transfusion: string, @Body() updateHctransfusioneDto: UpdateHctransfusioneDto) {
    return this.hctransfusionesService.update(estado_transfusion, updateHctransfusioneDto);
  }

  @Delete(':estado_transfusion')
  remove(@Param('estado_transfusion') estado_transfusion: string) {
    return this.hctransfusionesService.remove(estado_transfusion);
  }
}
