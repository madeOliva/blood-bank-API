import { Test, TestingModule } from '@nestjs/testing';
import { FactoresController } from './factores.controller';
import { FactoresService } from './factores.service';

describe('FactoresController', () => {
  let controller: FactoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactoresController],
      providers: [FactoresService],
    }).compile();

    controller = module.get<FactoresController>(FactoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
