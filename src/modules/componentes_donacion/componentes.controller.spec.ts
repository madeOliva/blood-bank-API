import { Test, TestingModule } from '@nestjs/testing';
import { ComponentesController } from './componentes.controller';

describe('ComponentesController', () => {
  let controller: ComponentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponentesController],
    }).compile();

    controller = module.get<ComponentesController>(ComponentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
