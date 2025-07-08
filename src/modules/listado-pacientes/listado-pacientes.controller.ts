import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ListadoPacientesService } from './listado-pacientes.service';
import { CreateListadoPacienteDto } from './dto/create-listado-paciente.dto';
import { UpdateListadoPacienteDto } from './dto/update-listado-paciente.dto';

@Controller('listado-pacientes')
export class ListadoPacientesController {
  constructor(private readonly listadoPacientesService: ListadoPacientesService) { }

  @Post()
  create(@Body() createListadoPacienteDto: CreateListadoPacienteDto) {
    return this.listadoPacientesService.create(createListadoPacienteDto);
  }

  @Get()
  findAll() {
    return this.listadoPacientesService.findAll();
  }

  @Get(':ci')
  findOne(@Param('ci') ci: string) {
    return this.listadoPacientesService.findOne(ci);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListadoPacienteDto: UpdateListadoPacienteDto) {
    return this.listadoPacientesService.update(+id, updateListadoPacienteDto);
  }

  // En el controlador
  @Delete(':ci')
  async remove(@Param('ci') ci: string) {
    try {
      return await this.listadoPacientesService.remove(ci);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}
