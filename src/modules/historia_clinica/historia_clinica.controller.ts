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

@Controller('historia-clinica')
export class HistoriaClinicaController {
  constructor(
    private readonly historiaClinicaService: HistoriaClinicaService,
  ) { }

  @Post()
  create(@Body() createHistoriaClinicaDto: CreateHistoriaClinicaDto) {
    return this.historiaClinicaService.create(createHistoriaClinicaDto);
  }

  @Get()
  findAll() {
    return this.historiaClinicaService.getAll();
  }

  @Get('/datos/:id')
  async getHistoriaClinica(@Param('id') id: string) {
    const historia = await this.historiaClinicaService.getOnH(id);
    return historia;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historiaClinicaService.getOne(id);
  }

  @Get('ci/:ci')
  getByCI(@Param('ci') ci: string) {
    return this.historiaClinicaService.getByCI(ci);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateHistoriaClinicaDto: UpdateHistoriaClinicaDto,
  ) {
    return this.historiaClinicaService.update(id, updateHistoriaClinicaDto);
  }

  @Patch(':id')
  async updateCitadoYFecha(
    @Param('id') id: string,
    @Body() body: { citado: boolean; fechaCita: Date }
  ) {
    return this.historiaClinicaService.updateCitadoYFecha(id, body.citado, body.fechaCita);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historiaClinicaService.delete(id);
  }
}
