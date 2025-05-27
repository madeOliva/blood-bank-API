import { Test, TestingModule } from '@nestjs/testing';
import { RegistroDonacionController } from './registro_donacion.controller';

describe('RegistroDonacionController', () => {
  let controller: RegistroDonacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroDonacionController],
    }).compile();

    controller = module.get<RegistroDonacionController>(RegistroDonacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
