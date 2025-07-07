import { Test, TestingModule } from '@nestjs/testing';
import { PruebaspretransfusionalespcpService } from './pruebaspretransfusionalespcp.service';

describe('PruebaspretransfusionalespcpService', () => {
  let service: PruebaspretransfusionalespcpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PruebaspretransfusionalespcpService],
    }).compile();

    service = module.get<PruebaspretransfusionalespcpService>(PruebaspretransfusionalespcpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
