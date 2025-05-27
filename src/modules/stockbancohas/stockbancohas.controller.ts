import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockbancohasService } from './stockbancohas.service';
import { CreateStockbancohaDto } from './dto/create-stockbancoha.dto';
import { UpdateStockbancohaDto } from './dto/update-stockbancoha.dto';

@Controller('stockbancohas')
export class StockbancohasController {
  constructor(private readonly stockbancohasService: StockbancohasService) {}

  @Post()
  create(@Body() createStockbancohaDto: CreateStockbancohaDto) {
    return this.stockbancohasService.create(createStockbancohaDto);
  }

  @Get()
  findAll() {
    return this.stockbancohasService.findAll();
  }

  @Get(':codigo_bolsa')
  findOne(@Param('codigo_bolsa') codigo_bolsa: string) {
    return this.stockbancohasService.findOne(codigo_bolsa);
  }

  @Patch(':codigo_bolsa')
  update(@Param('codigo_bolsa') codigo_bolsa: string, @Body() updateStockbancohaDto: UpdateStockbancohaDto) {
    return this.stockbancohasService.update(codigo_bolsa, updateStockbancohaDto);
  }

  @Delete(':codigo_bolsa')
  remove(@Param('codigo_bolsa') codigo_bolsa: string) {
    return this.stockbancohasService.remove(codigo_bolsa);
  }
}
