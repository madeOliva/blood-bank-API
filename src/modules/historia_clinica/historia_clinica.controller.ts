import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { HistoriaClinicaService } from './historia_clinica.service';
import { CreateHistoriaClinicaDto } from './dto/create-historia_clinica.dto';
import { UpdateHistoriaClinicaDto } from './dto/update-historia_clinica.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Historia Clinica')
@Controller('historia-clinica')
export class HistoriaClinicaController {
  constructor(
    private readonly historiaClinicaService: HistoriaClinicaService,
  ) {}

  @ApiOperation({ summary: 'Registrar una nueva historia clinica' })
  @ApiResponse({ status: 201, description: 'HC registrada con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createHistoriaClinicaDto: CreateHistoriaClinicaDto) {
    return this.historiaClinicaService.create(createHistoriaClinicaDto);
  }

  @ApiOperation({ summary: 'Obtener todas las HC' })
  @ApiResponse({ status: 201, description: 'HC obtenidas exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.historiaClinicaService.getAll();
  }

  @ApiOperation({ summary: 'Obtener todos los citados' })
  @ApiResponse({
    status: 201,
    description: 'lista de citados obtenida exitosamente',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get('citados')
  async getCitados() {
    return this.historiaClinicaService.getCitados();
  }

  @Get('/datos/:id')
  async getHistoriaClinica(@Param('id') id: string) {
    const historia = await this.historiaClinicaService.getOnH(id);
    return historia;
  }

  @ApiOperation({ summary: 'Obtener una historia clinica por ID' })
  @ApiResponse({ status: 201, description: 'HC obtenida exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historiaClinicaService.getOne(id);
  }

  @Get('ci/:ci')
  getByCI(@Param('ci') ci: string) {
    return this.historiaClinicaService.getByCI(ci);
  }

  @ApiOperation({ summary: 'Modificar una HC' })
  @ApiResponse({
    status: 200,
    description: 'Historia Clinica modificada exitosamente',
  })
  @ApiResponse({ status: 404, description: 'HC no encontrada' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID de la historia clinica a actualizar',
  })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateHistoriaClinicaDto: UpdateHistoriaClinicaDto,
  ) {
    return this.historiaClinicaService.update(id, updateHistoriaClinicaDto);
  }

  //Para modificar el estado de citado y la fecha de cita por id
  @ApiOperation({ summary: 'Modificar en una HC solo la fecha de cita y el estado de citado' })
  @ApiResponse({
    status: 200,
    description: 'Historia Clinica modificada exitosamente',
  })
  @ApiResponse({ status: 404, description: 'HC no encontrada' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID de la historia clinica a actualizar',
  })
  @Patch(':id')
  async updateCitadoYFecha(
    @Param('id') id: string,
    @Body() body: { citado: boolean; fechaCita: Date },
  ) {
    return this.historiaClinicaService.updateCitadoYFecha(
      id,
      body.citado,
      body.fechaCita,
    );
  }

  //Para modificar el estado de citado por id para la lista de citados
  @Patch(':id/citado')
  async updateCitadoById(
    @Param('id') id: string,
    @Body() body: { citado: boolean },
  ) {
    return this.historiaClinicaService.updateCitadoById(id, body.citado);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historiaClinicaService.delete(id);
  }
}
