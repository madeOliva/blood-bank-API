import { Test, TestingModule } from '@nestjs/testing';
import { TipocomponentehabitualController } from './tipocomponentehabitual.controller';
import { TipocomponentehabitualService } from './tipocomponentehabitual.service';

describe('TipocomponentehabitualController', () => {
  let controller: TipocomponentehabitualController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipocomponentehabitualController],
      providers: [TipocomponentehabitualService],
    }).compile();

    controller = module.get<TipocomponentehabitualController>(TipocomponentehabitualController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
