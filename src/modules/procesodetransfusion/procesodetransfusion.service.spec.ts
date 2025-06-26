import { Test, TestingModule } from '@nestjs/testing';
import { ProcesodetransfusionService } from './procesodetransfusion.service';

describe('ProcesodetransfusionService', () => {
  let service: ProcesodetransfusionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcesodetransfusionService],
    }).compile();

    service = module.get<ProcesodetransfusionService>(ProcesodetransfusionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
