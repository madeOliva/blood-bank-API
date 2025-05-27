import { Test, TestingModule } from '@nestjs/testing';
import { SexoController } from './sexo.controller';
import { SexoService } from './sexo.service';

describe('SexoController', () => {
  let controller: SexoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SexoController],
      providers: [SexoService],
    }).compile();

    controller = module.get<SexoController>(SexoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
