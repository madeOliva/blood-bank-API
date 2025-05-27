import { Test, TestingModule } from '@nestjs/testing';
import { CentrifugacionController } from './centrifugacion.controller';
import { CentrifugacionService } from './centrifugacion.service';

describe('CentrifugacionController', () => {
  let controller: CentrifugacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CentrifugacionController],
      providers: [CentrifugacionService],
    }).compile();

    controller = module.get<CentrifugacionController>(CentrifugacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
