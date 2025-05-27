import { Test, TestingModule } from '@nestjs/testing';
import { EstanciaExtranjeroService } from './estancia_extranjero.service';

describe('EstanciaExtranjeroService', () => {
  let service: EstanciaExtranjeroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstanciaExtranjeroService],
    }).compile();

    service = module.get<EstanciaExtranjeroService>(EstanciaExtranjeroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
