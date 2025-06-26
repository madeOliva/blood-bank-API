import { Test, TestingModule } from '@nestjs/testing';
import { ResultadosdelaboratorioService } from './resultadosdelaboratorio.service';

describe('ResultadosdelaboratorioService', () => {
  let service: ResultadosdelaboratorioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultadosdelaboratorioService],
    }).compile();

    service = module.get<ResultadosdelaboratorioService>(ResultadosdelaboratorioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
