import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComponentesatransfundirService } from './componentesatransfundir.service';
import { CreateComponentesatransfundirDto } from './dto/create-componentesatransfundir.dto';
import { UpdateComponentesatransfundirDto } from './dto/update-componentesatransfundir.dto';

@Controller('componentesatransfundir')
export class ComponentesatransfundirController {
  constructor(private readonly componentesatransfundirService: ComponentesatransfundirService) {}

  @Post()
  create(@Body() createComponentesatransfundirDto: CreateComponentesatransfundirDto) {
    return this.componentesatransfundirService.create(createComponentesatransfundirDto);
  }

  @Get()
  findAll() {
    return this.componentesatransfundirService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componentesatransfundirService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComponentesatransfundirDto: UpdateComponentesatransfundirDto) {
    return this.componentesatransfundirService.update(+id, updateComponentesatransfundirDto);
  }

  @Delete(':codigo_bolsa')
  remove(@Param('codigo_bolsa') codigo_bolsa: string) {
    return this.componentesatransfundirService.remove(codigo_bolsa);
  }
}
