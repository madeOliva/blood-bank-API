import { Test, TestingModule } from '@nestjs/testing';
import { PruebaspretransfusionalesgrService } from './pruebaspretransfusionalesgr.service';

describe('PruebaspretransfusionalesgrService', () => {
  let service: PruebaspretransfusionalesgrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PruebaspretransfusionalesgrService],
    }).compile();

    service = module.get<PruebaspretransfusionalesgrService>(PruebaspretransfusionalesgrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
