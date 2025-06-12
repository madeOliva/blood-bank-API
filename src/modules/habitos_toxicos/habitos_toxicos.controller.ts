import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { HabitosToxicosService } from './habitos_toxicos.service';
import { CreateHabitosToxicoDto } from './dto/create-habitos_toxico.dto';
import { UpdateHabitosToxicoDto } from './dto/update-habitos_toxico.dto';

@Controller('habitos-toxicos')
export class HabitosToxicosController {
  constructor(private readonly habitosToxicosService: HabitosToxicosService) {}

  @Post()
  create(@Body() createHabitosToxicoDto: CreateHabitosToxicoDto) {
    return this.habitosToxicosService.create(createHabitosToxicoDto);
  }

  @Get()
  findAll() {
    return this.habitosToxicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitosToxicosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHabitosToxicoDto: UpdateHabitosToxicoDto) {
    return this.habitosToxicosService.update(+id, updateHabitosToxicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitosToxicosService.remove(+id);
  }
}
