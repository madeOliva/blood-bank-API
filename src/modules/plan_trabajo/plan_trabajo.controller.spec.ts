import { Test, TestingModule } from '@nestjs/testing';
import { PlanTrabajoController } from './plan_trabajo.controller';
import { PlanTrabajoService } from './plan_trabajo.service';

describe('PlanTrabajoController', () => {
  let controller: PlanTrabajoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanTrabajoController],
      providers: [PlanTrabajoService],
    }).compile();

    controller = module.get<PlanTrabajoController>(PlanTrabajoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
