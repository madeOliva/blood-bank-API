import { Test, TestingModule } from '@nestjs/testing';
import { ConsejoPopularService } from './consejo_popular.service';

describe('ConsejoPopularService', () => {
  let service: ConsejoPopularService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsejoPopularService],
    }).compile();

    service = module.get<ConsejoPopularService>(ConsejoPopularService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
