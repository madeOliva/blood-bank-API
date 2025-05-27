import { Test, TestingModule } from '@nestjs/testing';
import { TipocomponenteService } from './tipocomponente.service';

describe('TipocomponenteService', () => {
  let service: TipocomponenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipocomponenteService],
    }).compile();

    service = module.get<TipocomponenteService>(TipocomponenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
