import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipopacienteService } from './tipopaciente.service';
import { CreateTipopacienteDto } from './dto/create-tipopaciente.dto';
import { UpdateTipopacienteDto } from './dto/update-tipopaciente.dto';

@Controller('tipopaciente')
export class TipopacienteController {
  constructor(private readonly tipopacienteService: TipopacienteService) {}

  @Post()
  create(@Body() createTipopacienteDto: CreateTipopacienteDto) {
    return this.tipopacienteService.create(createTipopacienteDto);
  }

  @Get()
  findAll() {
    return this.tipopacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipopacienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipopacienteDto: UpdateTipopacienteDto) {
    return this.tipopacienteService.update(+id, updateTipopacienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipopacienteService.remove(+id);
  }
}
