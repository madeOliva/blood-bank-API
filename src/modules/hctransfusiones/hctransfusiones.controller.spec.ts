import { Test, TestingModule } from '@nestjs/testing';
import { HctransfusionesController } from './hctransfusiones.controller';
import { HctransfusionesService } from './hctransfusiones.service';

describe('HctransfusionesController', () => {
  let controller: HctransfusionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HctransfusionesController],
      providers: [HctransfusionesService],
    }).compile();

    controller = module.get<HctransfusionesController>(HctransfusionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
