import { Test, TestingModule } from '@nestjs/testing';
import { TipopacienteService } from './tipopaciente.service';

describe('TipopacienteService', () => {
  let service: TipopacienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipopacienteService],
    }).compile();

    service = module.get<TipopacienteService>(TipopacienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
