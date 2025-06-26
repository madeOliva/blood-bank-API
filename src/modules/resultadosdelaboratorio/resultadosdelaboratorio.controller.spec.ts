import { Test, TestingModule } from '@nestjs/testing';
import { ResultadosdelaboratorioController } from './resultadosdelaboratorio.controller';
import { ResultadosdelaboratorioService } from './resultadosdelaboratorio.service';

describe('ResultadosdelaboratorioController', () => {
  let controller: ResultadosdelaboratorioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResultadosdelaboratorioController],
      providers: [ResultadosdelaboratorioService],
    }).compile();

    controller = module.get<ResultadosdelaboratorioController>(ResultadosdelaboratorioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
