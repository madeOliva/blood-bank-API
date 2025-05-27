import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ComponentesService } from './componentes.service';
import { CreateComponenteDto } from './dto/create-componentes.dto';
import { UpdateComponenteDto } from './dto/update-componentes.dto';

@Controller('componentes')
export class ComponentesController {
  constructor(private readonly componenteService: ComponentesService) {}

  @Get()
  findAll() {
    return this.componenteService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componenteService.getOne(id);
  }

  @Post()
  create(@Body() body: CreateComponenteDto) {
    return this.componenteService.create(body);
  }

  @Put(':id')
  update(@Body() body: UpdateComponenteDto, @Param('id') id: string) {
    return this.componenteService.update(body, id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.componenteService.delete(id);
  }
}
