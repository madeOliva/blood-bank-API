import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as PDFDocument from 'pdfkit';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

 @Post('descargar-plan')
async descargarPlan(@Body() body: any, @Res() res: Response) {
  const { planes } = body;
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=plan.pdf');
  doc.pipe(res);

  doc.fontSize(20).text('Plan de Donaciones', { align: 'center' });
  doc.moveDown();

  if (Array.isArray(planes) && planes.length > 0) {
    planes.forEach((plan: any, idx: number) => {
      // Formatear la fecha como AAAA-MM-DD 08:00 AM
      let fechaFormateada = '';
      if (plan.fechaHora) {
        const date = new Date(plan.fechaHora);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        fechaFormateada = `${year}-${month}-${day} 08:00 AM`;
      }
      doc.fontSize(14).text(
        `#${idx + 1}
Fecha: ${fechaFormateada}
Área: ${plan.areaSalud}
Consejo: ${plan.consejoPopular}
Consultorios afectados: ${plan.consultoriosAfectados}
Lugar: ${plan.lugarDonacion}
Compromiso: ${plan.compromiso}
Responsable: ${plan.responsableSalud}
CDR: ${plan.cdr}
-----------------------------`
      );
      doc.moveDown(0.5);
    });
  } else {
    doc.fontSize(14).text('No hay planes para mostrar.');
  }

  doc.end();
}


}
