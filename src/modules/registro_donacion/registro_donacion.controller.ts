import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RegistroDonacionService } from './registro_donacion.service';
import { CreateRegistroDonacionesDto } from './dto/create-registro_donacion.dto';
import { UpdateRegistroDonacionDto } from './dto/update-registro_donacion.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { RegistroDonacion } from './schemas/registro_donacion.schema';

@ApiTags('Registro de Donación')
@Controller('registro-donacion')
export class RegistroDonacionController {
  constructor(private readonly service: RegistroDonacionService) {}

  @Get()
  @ApiOperation({ summary: 'Obtiene todos los registros de donacion' })
  async findAllDonation(
    @Query('inicio') inicio: string,
    @Query('fin') fin: string,
  ) {
    if (!inicio || !fin) {
      throw new BadRequestException(
        'Debe proporcionar las fechas de inicio y fin',
      );
    }
    const fechaInicio = new Date(inicio);
    const fechaFin = new Date(fin);

    if (isNaN(fechaInicio.getTime()) || isNaN(fechaFin.getTime())) {
      throw new BadRequestException('Formato de fecha inválido');
    }

    return this.service.findByRangoFechas(fechaInicio, fechaFin);
  }

  @Get('hoja-cargo-donaciones')
  async hojaCargoDonaciones(
    @Query('inicio') inicio: string,
    @Query('fin') fin: string,
  ) {
    const fechaInicio = new Date(`${inicio}T00:00:00.000Z`);
    const fechaFin = new Date(`${fin}T23:59:59.999Z`);
    return this.service.hojaCargoDonaciones(fechaInicio, fechaFin);
  }

  @Get('aptos-interrogatorio')
  @ApiOperation({
    summary:
      'Obtiene todos los registros de donacion que son aptos al interrogatorio',
  })
  getDonacionesAptasInterrogatorio() {
    return this.service.getDonacionesAptasInterrogatorio();
  }

  @Get('consecutivo-historia-aceptada')
  async getConsecutivoAndHistoriaClinicaAceptada() {
    return this.service.getConsecutivoAndHistoriaClinicaAceptada();
  }


  @Get('consecutivo-historia-aceptada-controlados')
  async getConsecutivoAndHistoriaClinicaControlados() {
    return this.service.getConsecutivoAndHistoriaClinicaControlados();
  }





  @Get('historia-clinica/:id')
  async getRegistrosPorHistoriaClinica(@Param('id') historiaClinicaId: string) {
    return this.service.getRegistrosPorHistoriaClinica(historiaClinicaId);
  }


  @Get('pueden-donar')
  async getDonantesQuePuedenDonar() {
    return this.service.getDonantesQuePuedenDonar();
  }

  @Get('find')
  async findAll() {
    return this.service.findAll();
  }

  //Cargar muestras Analizadas
  @Get('analizadas')
async getAnalizadas(): Promise<any> {
  return this.service.getAnalizadas();
}

 //Cargar muestras Reanalizadas Suma
 @Get('reanalizadas-suma')
 async getReanalizadasSuma(): Promise<any> {
   return this.service.getReanalizadasSuma();
 }

 //Cargar muestras Reanalizadas Inmuno
 @Get('reanalizadas-inmuno')
 async getReanalizadasInmuno(): Promise<any> {
   return this.service.getReanalizadasInmuno();
 }

  //Cargar muestras Calidad
  @Get('analizadas-calidad')
  async getAnalizadasCalidad(): Promise<any> {
    return this.service.getAnalizadasCalidad();
  }
  
  //Cargar muestras Calidad
  @Get('reanalizadas-calidad')
  async getCalidadRepeticion(): Promise<any> {
    return this.service.getCalidadRepeticion();
  }

  @Get('datos')
  @ApiOperation({
    summary: 'Obtiene datos combinados de persona y registro de donación',
  })
  @ApiResponse({
    status: 200,
    description: 'Datos combinados obtenidos exitosamente',
  })
  async getDatosCompletos() {
    return this.service.getDatosCompletos();
  }

  @Get('observacion')
  @ApiOperation({ summary: 'Lista donantes no aptos y su observación' })
  async getDonantesNoAptos() {
    return this.service.getDonantesNoAptos();
  }

  @Get('donaciones-diarias')
  async findDonacionesDiarias() {
    return this.service.getDonacionesDiarias();
  }
  @Get('prechequeo/:id')
  getPrechequeoById(@Param('id') id: string) {
    return this.service.getPrechequeoById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea un nuevo registro' })
  async create(@Body() createDto: CreateRegistroDonacionesDto) {
    return this.service.create(createDto);
  }

  // --- RUTA DINÁMICA SIEMPRE AL FINAL ---
  @Get(':id')
  @ApiOperation({ summary: 'Obtiene un registro por ID' })
  async getOne(@Param('id') id: string) {
    return this.service.getOne(id);
  }

  @ApiOperation({ summary: 'Actualizar un registro de donación' })
  @ApiResponse({
    status: 200,
    description: 'Registro actualizado exitosamente',
  })
  @ApiResponse({ status: 404, description: 'Registro no encontrado' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID del registro a actualizar',
  })

  // Actualizar datos del lab Suma
  @Patch('update-laboratorio/:id')
  async updateLaboratorio(
    @Param('id') id: string,
    @Body() updateData: any,
  ): Promise<any> {
    console.log('Datos recibidos para actualizar:', updateData);
    return await this.service.updateLaboratorio(id, updateData);
  }

  // Actualizar datos del lab Inmuno
  @Patch('update-laboratorio-inmuno/:id')
  async updateLaboratorioInmuno(
    @Param('id') id: string,
    @Body() updateData: any,
  ): Promise<any> {
    console.log('Datos recibidos para actualizar:', updateData);
    return await this.service.updateLaboratorioInmuno(id, updateData);
  }


// Actualizar datos del lab Calidad
@Patch('update-laboratorio-calidad/:id')
async updateLaboratorioCalidad(
  @Param('id') id: string,
  @Body() updateData: any,
): Promise<any> {
  console.log('Datos recibidos para actualizar:', updateData);
  return await this.service.updateLaboratorioCalidad(id, updateData);
}

 @Put(':id')
  update(
    @Body() updateRegistroDonacionDto: UpdateRegistroDonacionDto,
    @Param('id') id: string,
  ) {
    return this.service.update(id, updateRegistroDonacionDto);
  }

  @ApiOperation({ summary: 'Actualizar un registro de donación (updatee)' })
  @ApiResponse({
    status: 200,
    description: 'Registro actualizado exitosamente (updatee)',
  })
  @ApiResponse({ status: 404, description: 'Registro no encontrado' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID del registro a actualizar',
  })
  @Put('updatee/:id')
  updatee(
    @Body() updateRegistroDonacionDto: UpdateRegistroDonacionDto,
    @Param('id') id: string,
  ) {
    return this.service.updatee(id, updateRegistroDonacionDto);
  }

  @ApiOperation({ summary: 'Eliminar un registro de donación' })
  @ApiResponse({ status: 200, description: 'Registro eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Registro no encontrado' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID del registro a eliminar',
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
