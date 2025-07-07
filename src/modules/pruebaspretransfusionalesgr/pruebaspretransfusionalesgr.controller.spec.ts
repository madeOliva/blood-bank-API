import { Test, TestingModule } from '@nestjs/testing';
import { PruebaspretransfusionalesgrController } from './pruebaspretransfusionalesgr.controller';
import { PruebaspretransfusionalesgrService } from './pruebaspretransfusionalesgr.service';

describe('PruebaspretransfusionalesgrController', () => {
  let controller: PruebaspretransfusionalesgrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PruebaspretransfusionalesgrController],
      providers: [PruebaspretransfusionalesgrService],
    }).compile();

    controller = module.get<PruebaspretransfusionalesgrController>(PruebaspretransfusionalesgrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
