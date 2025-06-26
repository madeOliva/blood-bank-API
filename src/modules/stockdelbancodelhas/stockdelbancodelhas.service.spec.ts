import { Test, TestingModule } from '@nestjs/testing';
import { StockdelbancodelhasService } from './stockdelbancodelhas.service';

describe('StockdelbancodelhasService', () => {
  let service: StockdelbancodelhasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockdelbancodelhasService],
    }).compile();

    service = module.get<StockdelbancodelhasService>(StockdelbancodelhasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
