import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalSaludService } from './personal_salud.service';
import { CreatePersonalSaludDto } from './dto/create-personal_salud.dto';
import { UpdatePersonalSaludDto } from './dto/update-personal_salud.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Personal de Salud')
@Controller('personal-salud')
export class PersonalSaludController {
  constructor(private readonly personalSaludService: PersonalSaludService) { }


  @ApiOperation({ summary: 'Registrar un nuevo personal de salud' })
  @ApiResponse({ status: 201, description: 'Personal de salud registrado con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createPersonalSaludDto: CreatePersonalSaludDto) {
    return this.personalSaludService.create(createPersonalSaludDto);
  }


  @ApiOperation({ summary: 'Obtener todos los personales de salud' })
  @ApiResponse({ status: 201, description: 'Personales de salud obtenidos exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.personalSaludService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un personal de salud' })
  @ApiResponse({ status: 201, description: 'Personal de salud obtenido exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalSaludService.findOne(id);
  }


  @ApiOperation({ summary: 'Actualizar un personal de salud' })
  @ApiResponse({ status: 201, description: 'Personal de salud actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalSaludDto: UpdatePersonalSaludDto) {
    return this.personalSaludService.update(id, updatePersonalSaludDto);
  }


  @ApiOperation({ summary: 'Eliminar un personal de salud' })
  @ApiResponse({ status: 201, description: 'Personal de salud eliminado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalSaludService.remove(id);
  }
}
