import { Test, TestingModule } from '@nestjs/testing';
import { ConsejoPopularController } from './consejo_popular.controller';
import { ConsejoPopularService } from './consejo_popular.service';

describe('ConsejoPopularController', () => {
  let controller: ConsejoPopularController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsejoPopularController],
      providers: [ConsejoPopularService],
    }).compile();

    controller = module.get<ConsejoPopularController>(ConsejoPopularController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
