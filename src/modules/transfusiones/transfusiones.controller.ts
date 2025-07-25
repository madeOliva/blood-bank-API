import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TransfusionesService } from './transfusiones.service';
import { CreateTransfusionesDto } from './dto/create-transfusiones.dto';
import { UpdateTransfusionesDto } from './dto/update-transfusiones.dto';
//import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

//@ApiTags('Transfusiones')
@Controller('transfusiones')
export class TransfusionesController {
  constructor(private readonly transfusionesService: TransfusionesService) { }


  //@ApiOperation({ summary: 'Registrar una nueva transfusion' })
  //@ApiResponse({ status: 201, description: 'Transfusion registrada con exito' })
  //@ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createTransfusionesDto: CreateTransfusionesDto) {
    return this.transfusionesService.create(createTransfusionesDto);
  }

  //@ApiOperation({ summary: 'Obtener todas las transfusiones' })
  //@ApiResponse({ status: 201, description: 'Transfusiones obtenidas exitosamente' })
  //@ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.transfusionesService.findAll();
  }

  //@ApiOperation({ summary: 'Obtener una transfusion' })
  //@ApiResponse({ status: 201, description: 'Transfusion obtenida exitosamente' })
  //@ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id_orden')
  findOne(@Param('id_orden') id: string) {
    return this.transfusionesService.findOne(id);
  }

  @Get('ci/:ci')
  async findOneByCi(@Param('ci') ci: string) {
    return this.transfusionesService.findOneByCi(ci);
  }

  @Get('buscar')
  findByNombreCompleto(
    @Query('nombre') nombre: string,
    @Query('primerApellido') primerApellido: string,
    @Query('segundoApellido') segundoApellido: string,
  ) {
    return this.transfusionesService.findByNombreCompleto(nombre, primerApellido, segundoApellido);
  }

  //@ApiOperation({ summary: 'Actualizar una transfusion' })
  //@ApiResponse({ status: 201, description: 'Transfusion actualizada exitosamente' })
  //@ApiResponse({ status: 400, description: 'Bad request' })
  @Patch('by-orden/:idOrden')  // Cambia la ruta para ser más descriptiva
  async updateByIdOrden(
    @Param('idOrden') idOrden: string, // Recibe el id_orden numérico
    @Body() updateTransfusionDto: UpdateTransfusionesDto
  ) {
    return this.transfusionesService.updateByIdOrden(
      Number(idOrden), // Convertir a número si es necesario
      updateTransfusionDto
    );
  }

  //@ApiOperation({ summary: 'Eliminar una transfusion' })
  //@ApiResponse({ status: 201, description: 'Transfusion eliminada exitosamente' })
  //@ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id_orden')
  remove(@Param('id_orden') id_orden: string) {
    return this.transfusionesService.remove(id_orden);
  }

  @Delete('by-orden/:id_orden')
  removeByOrden(@Param('id_orden') id_orden: string) {
    return this.transfusionesService.removeByOrden(id_orden);
  }

  @Delete('by-ci/:ci')
  async removeByCI(@Param('ci') ci: string) {
    return this.transfusionesService.removeByCI(ci);
  }
}
