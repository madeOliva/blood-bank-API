import { Test, TestingModule } from '@nestjs/testing';
import { GruposSanguineosController } from './grupos_sanguineos.controller';
import { GruposSanguineosService } from './grupos_sanguineos.service';

describe('GruposSanguineosController', () => {
  let controller: GruposSanguineosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GruposSanguineosController],
      providers: [GruposSanguineosService],
    }).compile();

    controller = module.get<GruposSanguineosController>(GruposSanguineosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
