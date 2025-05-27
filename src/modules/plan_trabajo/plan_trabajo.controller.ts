import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanTrabajoService } from './plan_trabajo.service';
import { CreatePlanTrabajoDto } from './dto/create-plan_trabajo.dto';
import { UpdatePlanTrabajoDto } from './dto/update-plan_trabajo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

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
}
