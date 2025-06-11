import { Test, TestingModule } from '@nestjs/testing';
import { FactoresService } from './factores.service';

describe('FactoresService', () => {
  let service: FactoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactoresService],
    }).compile();

    service = module.get<FactoresService>(FactoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
