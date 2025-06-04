import { ConflictException, Get, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plan_Trabajo } from './schema/plan_trabajo.schema';
import { CreatePlanTrabajoDto } from './dto/create-plan_trabajo.dto';
import { UpdatePlanTrabajoDto } from './dto/update-plan_trabajo.dto';





@Injectable()
export class PlanTrabajoService {
  create(createPlanTrabajoDto: CreatePlanTrabajoDto) {
    throw new Error('Method not implemented.');
  }
  private readonly logger = new Logger(PlanTrabajoService.name);

  constructor(
    @InjectModel(Plan_Trabajo.name)
    private readonly planTrabajoModel: Model<Plan_Trabajo>,
  ) {}

  async crearPlan(createPlanTrabajoDto: CreatePlanTrabajoDto) {
    try {
      const nuevoPlan = new this.planTrabajoModel(createPlanTrabajoDto);
      return await nuevoPlan.save();
    } catch (error) {
      if (error.code === 11000) {
        this.logger.error('Error: Ya existe un plan con la misma fecha y responsable');
        throw new Error('No se permiten planes duplicados');
      }
      throw error;
    }
  }
  



  async findAll(): Promise<Plan_Trabajo[] | {message: string}> {
     return this.planTrabajoModel.find()
   }

   async findOne(plan_trabajo: string) {
    const plan = await this.planTrabajoModel.findOne({plan_trabajo}).exec();
    if (!plan){
      throw new ConflictException(`No existe el area de salud ${plan_trabajo}`)
    }
    return this.planTrabajoModel.findOne({plan_trabajo});
  }

 async update(id: string, UpdatePlanTrabajoDto: UpdatePlanTrabajoDto): Promise<Plan_Trabajo | {message: string}> {
    const updateplan = await this.planTrabajoModel.findByIdAndUpdate(id, UpdatePlanTrabajoDto, {new:true}).exec();

    if(!updateplan){
      return {message: `No existe el plan de trabajo ${id}`}
    }
    return updateplan;
  }

 async remove(id: string): Promise<Plan_Trabajo | {message: string}> {
    const deleteplan = await this.planTrabajoModel.findByIdAndDelete(id);

    if (!deleteplan){
      return{ message: "El plan de trabajo no existe"}
    }
    return deleteplan;
  }
}
