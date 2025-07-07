import { Test, TestingModule } from '@nestjs/testing';
import { PruebaspretransfusionalespcpController } from './pruebaspretransfusionalespcp.controller';
import { PruebaspretransfusionalespcpService } from './pruebaspretransfusionalespcp.service';

describe('PruebaspretransfusionalespcpController', () => {
  let controller: PruebaspretransfusionalespcpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PruebaspretransfusionalespcpController],
      providers: [PruebaspretransfusionalespcpService],
    }).compile();

    controller = module.get<PruebaspretransfusionalespcpController>(PruebaspretransfusionalespcpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
