import { Test, TestingModule } from '@nestjs/testing';
import { HabitosToxicosService } from './habitos_toxicos.service';

describe('HabitosToxicosService', () => {
  let service: HabitosToxicosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HabitosToxicosService],
    }).compile();

    service = module.get<HabitosToxicosService>(HabitosToxicosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
