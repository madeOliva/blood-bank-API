import { Test, TestingModule } from '@nestjs/testing';
import { PruebaspostransfusionalesService } from './pruebaspostransfusionales.service';

describe('PruebaspostransfusionalesService', () => {
  let service: PruebaspostransfusionalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PruebaspostransfusionalesService],
    }).compile();

    service = module.get<PruebaspostransfusionalesService>(PruebaspostransfusionalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
