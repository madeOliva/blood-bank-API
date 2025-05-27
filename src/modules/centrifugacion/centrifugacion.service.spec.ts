import { Test, TestingModule } from '@nestjs/testing';
import { CentrifugacionService } from './centrifugacion.service';

describe('CentrifugacionService', () => {
  let service: CentrifugacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CentrifugacionService],
    }).compile();

    service = module.get<CentrifugacionService>(CentrifugacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
