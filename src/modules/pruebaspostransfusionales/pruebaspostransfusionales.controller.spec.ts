import { Test, TestingModule } from '@nestjs/testing';
import { PruebaspostransfusionalesController } from './pruebaspostransfusionales.controller';
import { PruebaspostransfusionalesService } from './pruebaspostransfusionales.service';

describe('PruebaspostransfusionalesController', () => {
  let controller: PruebaspostransfusionalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PruebaspostransfusionalesController],
      providers: [PruebaspostransfusionalesService],
    }).compile();

    controller = module.get<PruebaspostransfusionalesController>(PruebaspostransfusionalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
