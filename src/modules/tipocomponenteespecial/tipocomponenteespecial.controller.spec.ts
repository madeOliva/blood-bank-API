import { Test, TestingModule } from '@nestjs/testing';
import { TipocomponenteespecialController } from './tipocomponenteespecial.controller';
import { TipocomponenteespecialService } from './tipocomponenteespecial.service';

describe('TipocomponenteespecialController', () => {
  let controller: TipocomponenteespecialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipocomponenteespecialController],
      providers: [TipocomponenteespecialService],
    }).compile();

    controller = module.get<TipocomponenteespecialController>(TipocomponenteespecialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
