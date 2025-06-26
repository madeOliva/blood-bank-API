import { Test, TestingModule } from '@nestjs/testing';
import { StockdelbancodelhasController } from './stockdelbancodelhas.controller';
import { StockdelbancodelhasService } from './stockdelbancodelhas.service';

describe('StockdelbancodelhasController', () => {
  let controller: StockdelbancodelhasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockdelbancodelhasController],
      providers: [StockdelbancodelhasService],
    }).compile();

    controller = module.get<StockdelbancodelhasController>(StockdelbancodelhasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
