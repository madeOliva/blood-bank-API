import { Test, TestingModule } from '@nestjs/testing';
import { AreaSaludService } from './area_salud.service';

describe('AreaSaludService', () => {
  let service: AreaSaludService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AreaSaludService],
    }).compile();

    service = module.get<AreaSaludService>(AreaSaludService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
