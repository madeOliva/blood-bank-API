import { Test, TestingModule } from '@nestjs/testing';
import { DonacionController } from './donacion.controller';

describe('DonacionController', () => {
  let controller: DonacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonacionController],
    }).compile();

    controller = module.get<DonacionController>(DonacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
