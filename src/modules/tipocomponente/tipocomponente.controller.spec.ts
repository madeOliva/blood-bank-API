import { Test, TestingModule } from '@nestjs/testing';
import { TipocomponenteController } from './tipocomponente.controller';
import { TipocomponenteService } from './tipocomponente.service';

describe('TipocomponenteController', () => {
  let controller: TipocomponenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipocomponenteController],
      providers: [TipocomponenteService],
    }).compile();

    controller = module.get<TipocomponenteController>(TipocomponenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
