import { Test, TestingModule } from '@nestjs/testing';
import { PlanTrabajoService } from './plan_trabajo.service';

describe('PlanTrabajoService', () => {
  let service: PlanTrabajoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanTrabajoService],
    }).compile();

    service = module.get<PlanTrabajoService>(PlanTrabajoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
