import { Test, TestingModule } from '@nestjs/testing';
import { GruposSanguineosService } from './grupos_sanguineos.service';

describe('GruposSanguineosService', () => {
  let service: GruposSanguineosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GruposSanguineosService],
    }).compile();

    service = module.get<GruposSanguineosService>(GruposSanguineosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
