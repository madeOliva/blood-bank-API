import { Test, TestingModule } from '@nestjs/testing';
import { ProcesodetransfusionController } from './procesodetransfusion.controller';
import { ProcesodetransfusionService } from './procesodetransfusion.service';

describe('ProcesodetransfusionController', () => {
  let controller: ProcesodetransfusionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcesodetransfusionController],
      providers: [ProcesodetransfusionService],
    }).compile();

    controller = module.get<ProcesodetransfusionController>(ProcesodetransfusionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
