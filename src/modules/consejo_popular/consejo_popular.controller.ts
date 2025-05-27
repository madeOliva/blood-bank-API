import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsejoPopularService } from './consejo_popular.service';
import { CreateConsejoPopularDto } from './dto/create-consejo_popular.dto';
import { UpdateConsejoPopularDto } from './dto/update-consejo_popular.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Consejo Popular')
@Controller('/consejo-popular')
export class ConsejoPopularController {
  constructor(private readonly consejoPopularService: ConsejoPopularService) {}

  @ApiOperation({ summary: 'Registrar un nuevo consejo popular' })
    @ApiResponse({ status: 201, description: 'Consejo popular registrado con exito' })
    @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createConsejoPopularDto: CreateConsejoPopularDto) {
    return this.consejoPopularService.create(createConsejoPopularDto);
  }

  @ApiOperation({ summary: 'Obtener todos los consejos populares' })
    @ApiResponse({ status: 201, description: 'Consejos populares obtenidos exitosamente' })
    @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.consejoPopularService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un consejo popular' })
    @ApiResponse({ status: 201, description: 'Consejo popular obtenido exitosamente' })
    @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':name')
  findOne(@Param('name') name : string) {
    return this.consejoPopularService.findOne(name);
  }

  @ApiOperation({ summary: 'Actualizar un consejo popular' })
    @ApiResponse({ status: 201, description: 'Consejo popular actualizado exitosamente' })
    @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsejoPopularDto: UpdateConsejoPopularDto) {
    return this.consejoPopularService.update(id, updateConsejoPopularDto);
  }

  @ApiOperation({ summary: 'Eliminar un consejo popular' })
    @ApiResponse({ status: 201, description: 'Consejo popular eliminado exitosamente' })
    @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consejoPopularService.remove(id);
  }
}
