import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProcesodetransfusionService } from './procesodetransfusion.service';
import { CreateProcesodetransfusionDto } from './dto/create-procesodetransfusion.dto';
import { UpdateProcesodetransfusionDto } from './dto/update-procesodetransfusion.dto';

@Controller('procesodetransfusion')
export class ProcesodetransfusionController {
  constructor(private readonly procesodetransfusionService: ProcesodetransfusionService) {}

  @Post()
  create(@Body() createProcesodetransfusionDto: CreateProcesodetransfusionDto) {
    return this.procesodetransfusionService.create(createProcesodetransfusionDto);
  }

  @Get()
  findAll() {
    return this.procesodetransfusionService.findAll();
  }

  @Get(':no_orden')
  findOne(@Param('no_orden') no_orden: string) {
    return this.procesodetransfusionService.findOne(no_orden);
  }

  @Patch(':no_orden')
  update(@Param('no_orden') no_orden: string, @Body() updateProcesodetransfusionDto: UpdateProcesodetransfusionDto) {
    return this.procesodetransfusionService.update(no_orden, updateProcesodetransfusionDto);
  }

  @Delete(':no_orden')
  remove(@Param('no_orden') no_orden: string) {
    return this.procesodetransfusionService.remove(no_orden);
  }
}
