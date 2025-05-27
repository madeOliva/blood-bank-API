import { Test, TestingModule } from '@nestjs/testing';
import { StockbancohasController } from './stockbancohas.controller';
import { StockbancohasService } from './stockbancohas.service';

describe('StockbancohasController', () => {
  let controller: StockbancohasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockbancohasController],
      providers: [StockbancohasService],
    }).compile();

    controller = module.get<StockbancohasController>(StockbancohasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
