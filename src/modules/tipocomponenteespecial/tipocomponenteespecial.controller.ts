import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipocomponenteespecialService } from './tipocomponenteespecial.service';
import { CreateTipocomponenteespecialDto } from './dto/create-tipocomponenteespecial.dto';
import { UpdateTipocomponenteespecialDto } from './dto/update-tipocomponenteespecial.dto';

@Controller('tipocomponenteespecial')
export class TipocomponenteespecialController {
  constructor(private readonly tipocomponenteespecialService: TipocomponenteespecialService) {}

  @Post()
  create(@Body() createTipocomponenteespecialDto: CreateTipocomponenteespecialDto) {
    return this.tipocomponenteespecialService.create(createTipocomponenteespecialDto);
  }

  @Get()
  findAll() {
    return this.tipocomponenteespecialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipocomponenteespecialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipocomponenteespecialDto: UpdateTipocomponenteespecialDto) {
    return this.tipocomponenteespecialService.update(+id, updateTipocomponenteespecialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipocomponenteespecialService.remove(+id);
  }
}
