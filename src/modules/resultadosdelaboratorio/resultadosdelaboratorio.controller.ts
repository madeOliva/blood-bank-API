import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultadosdelaboratorioService } from './resultadosdelaboratorio.service';
import { CreateResultadosdelaboratorioDto } from './dto/create-resultadosdelaboratorio.dto';
import { UpdateResultadosdelaboratorioDto } from './dto/update-resultadosdelaboratorio.dto';

@Controller('resultadosdelaboratorio')
export class ResultadosdelaboratorioController {
  constructor(private readonly resultadosdelaboratorioService: ResultadosdelaboratorioService) {}

  @Post()
  create(@Body() createResultadosdelaboratorioDto: CreateResultadosdelaboratorioDto) {
    return this.resultadosdelaboratorioService.create(createResultadosdelaboratorioDto);
  }

  @Get()
  findAll() {
    return this.resultadosdelaboratorioService.findAll();
  }

  @Get(':id_orden')
  findOne(@Param('id_orden') id_orden: string) {
    return this.resultadosdelaboratorioService.findOne(id_orden);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResultadosdelaboratorioDto: UpdateResultadosdelaboratorioDto) {
    return this.resultadosdelaboratorioService.update(+id, updateResultadosdelaboratorioDto);
  }

  @Delete(':id_orden')
  remove(@Param('id_orden') id_orden: string) {
    return this.resultadosdelaboratorioService.remove(id_orden);
  }
}
