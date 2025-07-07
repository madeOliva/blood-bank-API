import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PruebaspretransfusionalespcpService } from './pruebaspretransfusionalespcp.service';
import { CreatePruebaspretransfusionalespcpDto } from './dto/create-pruebaspretransfusionalespcp.dto';
import { UpdatePruebaspretransfusionalespcpDto } from './dto/update-pruebaspretransfusionalespcp.dto';

@Controller('pruebaspretransfusionalespcp')
export class PruebaspretransfusionalespcpController {
  constructor(private readonly pruebaspretransfusionalespcpService: PruebaspretransfusionalespcpService) {}

  @Post()
  create(@Body() createPruebaspretransfusionalespcpDto: CreatePruebaspretransfusionalespcpDto) {
    return this.pruebaspretransfusionalespcpService.create(createPruebaspretransfusionalespcpDto);
  }

  @Get()
  findAll() {
    return this.pruebaspretransfusionalespcpService.findAll();
  }

  @Get(':codigo_bolsa')
  findOne(@Param('codigo_bolsa') codigo_bolsa: string) {
    return this.pruebaspretransfusionalespcpService.findOne(codigo_bolsa);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePruebaspretransfusionalespcpDto: UpdatePruebaspretransfusionalespcpDto) {
    return this.pruebaspretransfusionalespcpService.update(+id, updatePruebaspretransfusionalespcpDto);
  }

  @Delete(':codigo_bolsa')
  remove(@Param('codigo_bolsa') codigo_bolsa: string) {
    return this.pruebaspretransfusionalespcpService.remove(codigo_bolsa);
  }
}
