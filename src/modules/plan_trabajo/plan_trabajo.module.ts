import { Module } from '@nestjs/common';
import { PlanTrabajoService } from './plan_trabajo.service';
import { PlanTrabajoController } from './plan_trabajo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Plan_Trabajo, Plan_TrabajoSchema } from './schema/plan_trabajo.schema';

@Module({

  imports:[
    MongooseModule.forFeature([
      {name: Plan_Trabajo.name,schema: Plan_TrabajoSchema}
      
    ]),
  ],
  controllers: [PlanTrabajoController],
  providers: [PlanTrabajoService],
})
export class PlanTrabajoModule {}