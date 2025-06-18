import { Test, TestingModule } from '@nestjs/testing';
import { PruebaspretransfusionalesController } from './pruebaspretransfusionales.controller';
import { PruebaspretransfusionalesService } from './pruebaspretransfusionales.service';

describe('PruebaspretransfusionalesController', () => {
  let controller: PruebaspretransfusionalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PruebaspretransfusionalesController],
      providers: [PruebaspretransfusionalesService],
    }).compile();

    controller = module.get<PruebaspretransfusionalesController>(PruebaspretransfusionalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
