import { Test, TestingModule } from '@nestjs/testing';
import { CausaController } from './causa.controller';
import { CausaService } from './causa.service';

describe('CausaController', () => {
  let controller: CausaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CausaController],
      providers: [CausaService],
    }).compile();

    controller = module.get<CausaController>(CausaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
