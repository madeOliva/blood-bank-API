import { Test, TestingModule } from '@nestjs/testing';
import { TipocomponenteespecialService } from './tipocomponenteespecial.service';

describe('TipocomponenteespecialService', () => {
  let service: TipocomponenteespecialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipocomponenteespecialService],
    }).compile();

    service = module.get<TipocomponenteespecialService>(TipocomponenteespecialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
