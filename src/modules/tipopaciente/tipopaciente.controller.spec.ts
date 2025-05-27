import { Test, TestingModule } from '@nestjs/testing';
import { TipopacienteController } from './tipopaciente.controller';
import { TipopacienteService } from './tipopaciente.service';

describe('TipopacienteController', () => {
  let controller: TipopacienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipopacienteController],
      providers: [TipopacienteService],
    }).compile();

    controller = module.get<TipopacienteController>(TipopacienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
