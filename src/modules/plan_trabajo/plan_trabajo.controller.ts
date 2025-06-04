import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanTrabajoService } from './plan_trabajo.service';
import { CreatePlanTrabajoDto } from './dto/create-plan_trabajo.dto';
import { UpdatePlanTrabajoDto } from './dto/update-plan_trabajo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import * as nodemailer from 'nodemailer';

@ApiTags('Plan de Trabajo')

@Controller('plan-trabajo')
export class PlanTrabajoController {
  constructor(private readonly planTrabajoService: PlanTrabajoService) { }


  
  @ApiOperation({ summary: 'Registrar un nuevo plan de trabajo' })
  @ApiResponse({ status: 201, description: 'Plan de trabajo registrado con exito' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() createPlanTrabajoDto: CreatePlanTrabajoDto) {
    return this.planTrabajoService.crearPlan(createPlanTrabajoDto);
  }

  @ApiOperation({ summary: 'Obtener todos los planes de trabajo' })
  @ApiResponse({ status: 201, description: 'Planes de trabajo obtenidos exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll() {
    return this.planTrabajoService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un plan de trabajo' })
  @ApiResponse({ status: 201, description: 'Plan de trabajo obtenido exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') responsableDeSalud: string) {
    return this.planTrabajoService.findOne(responsableDeSalud);
  }

  @ApiOperation({ summary: 'Actualizar un plan de trabajo' })
  @ApiResponse({ status: 201, description: 'Plan de trabajo actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanTrabajoDto: UpdatePlanTrabajoDto) {
    return this.planTrabajoService.update(id, updatePlanTrabajoDto);
  }

  @ApiOperation({ summary: 'Eliminar un plan de trabajo' })
  @ApiResponse({ status: 201, description: 'Plan de trabajo eliminado exitosamente' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planTrabajoService.remove(id);
  }

// ...existing code...

  @ApiOperation({ summary: 'Enviar plan de trabajo por correo electrónico' })
  @ApiResponse({ status: 201, description: 'Correo enviado exitosamente' })
  @ApiResponse({ status: 400, description: 'No hay planes para enviar' })
  @Post('enviar-correo')
  async enviarCorreo(@Body() body: { email: string; planes: any[] }) {
    const { email, planes } = body;

    if (!planes || !Array.isArray(planes) || planes.length === 0) {
      return { message: 'No hay planes para enviar' };
    }

    // Configura tu transporte SMTP real aquí
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'luisangelmilo1@gmail.com', // Cambia por tu correo real
        pass: 'Superame',      // Cambia por tu contraseña o contraseña de aplicación
      },
    });

    const html = `
      <h2>Plan de Donaciones</h2>
      <ul>
        ${planes
          .map(
            (p) => `<li>
              <b>Fecha:</b> ${p.fechaHora || p.fecha}<br/>
              <b>Área de salud:</b> ${p.areaSalud}<br/>
              <b>Consejo Popular:</b> ${p.consejoPopular}<br/>
              <b>Consultorios Afectados:</b> ${p.consultoriosAfectados}<br/>
              <b>Lugar Donación:</b> ${p.lugarDonacion}<br/>
              <b>Compromiso:</b> ${p.compromiso}<br/>
              <b>Responsable Salud:</b> ${p.responsableSalud}<br/>
              <b>CDR:</b> ${p.cdr}
            </li>`
          )
          .join("<br/>")}
      </ul>
    `;

    await transporter.sendMail({
      from: '"Banco de Sangre" <tucorreo@gmail.com>',
      to: email,
      subject: 'Plan de Donaciones',
      html,
    });

    return { message: 'Correo enviado' };
  }

@Get('planes')
findAllPlanes() {
  return this.planTrabajoService.findAll();
}

}
