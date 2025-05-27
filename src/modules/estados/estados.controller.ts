import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { CreateEstadoDto } from './dto/create-estados.dto';
import { UpdateEstadoDto } from './dto/update-estados.dto';

@Controller('estados')
export class EstadosController {
    constructor(private readonly estadoService:EstadosService){
    }

    @Get()
      findAll() {
        return this.estadoService.getAll();
      }
    
      @Get(':id')
      findOne(@Param('id') id: string) {
        return this.estadoService.getOne(id);
      }
    
      @Post()
      create(@Body() body: CreateEstadoDto) {
        return this.estadoService.create(body);
      }
    
      @Put(':id')
      update(@Body() body: UpdateEstadoDto, @Param('id') id: string) {
        return this.estadoService.update(body, id);
      }
    
      @Delete(':id')
      delete(@Param('id') id: string) {
        return this.estadoService.delete(id);
      }
}
