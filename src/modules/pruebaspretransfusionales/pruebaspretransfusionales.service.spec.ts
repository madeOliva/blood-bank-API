import { Test, TestingModule } from '@nestjs/testing';
import { PruebaspretransfusionalesService } from './pruebaspretransfusionales.service';

describe('PruebaspretransfusionalesService', () => {
  let service: PruebaspretransfusionalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PruebaspretransfusionalesService],
    }).compile();

    service = module.get<PruebaspretransfusionalesService>(PruebaspretransfusionalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
