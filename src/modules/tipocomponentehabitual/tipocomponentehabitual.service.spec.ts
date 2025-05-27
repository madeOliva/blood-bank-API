import { Test, TestingModule } from '@nestjs/testing';
import { TipocomponentehabitualService } from './tipocomponentehabitual.service';

describe('TipocomponentehabitualService', () => {
  let service: TipocomponentehabitualService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipocomponentehabitualService],
    }).compile();

    service = module.get<TipocomponentehabitualService>(TipocomponentehabitualService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
