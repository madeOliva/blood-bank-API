import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockdelbancodelhasService } from './stockdelbancodelhas.service';
import { CreateStockdelbancodelhaDto } from './dto/create-stockdelbancodelha.dto';
import { UpdateStockdelbancodelhaDto } from './dto/update-stockdelbancodelha.dto';

@Controller('stockdelbancodelhas')
export class StockdelbancodelhasController {
  constructor(private readonly stockdelbancodelhasService: StockdelbancodelhasService) { }

  @Post()
  create(@Body() createStockdelbancodelhaDto: CreateStockdelbancodelhaDto) {
    return this.stockdelbancodelhasService.create(createStockdelbancodelhaDto);
  }

  @Get()
  findAll() {
    return this.stockdelbancodelhasService.findAll();
  }

  @Get('bolsa/:codigo_bolsa')
  findOne(@Param('codigo_bolsa') codigo_bolsa: string) {
    return this.stockdelbancodelhasService.findOne(codigo_bolsa);
  }

  @Get('paciente/:tipo_paciente')
  async findByTipoPaciente(@Param('tipo_paciente') tipo_paciente: string) {
    return this.stockdelbancodelhasService.findAllTipoPaciente(tipo_paciente);
  }

  @Patch(':codigo_bolsa')
  update(@Param('codigo_bolsa') codigo_bolsa: string, @Body() updateStockdelbancodelhaDto: UpdateStockdelbancodelhaDto) {
    return this.stockdelbancodelhasService.update(codigo_bolsa, updateStockdelbancodelhaDto);
  }

  @Delete(':codigo_bolsa')
  remove(@Param('codigo_bolsa') codigo_bolsa: string) {
    return this.stockdelbancodelhasService.remove(codigo_bolsa);
  }
}
