import { Test, TestingModule } from '@nestjs/testing';
import { ComponentesObtenidosController } from './componentes_obtenidos.controller';
import { ComponentesObtenidosService } from './componentes_obtenidos.service';

describe('ComponentesObtenidosController', () => {
  let controller: ComponentesObtenidosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponentesObtenidosController],
      providers: [ComponentesObtenidosService],
    }).compile();

    controller = module.get<ComponentesObtenidosController>(ComponentesObtenidosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
