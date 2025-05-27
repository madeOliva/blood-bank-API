import { Test, TestingModule } from '@nestjs/testing';
import { StockbancohasService } from './stockbancohas.service';

describe('StockbancohasService', () => {
  let service: StockbancohasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockbancohasService],
    }).compile();

    service = module.get<StockbancohasService>(StockbancohasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
