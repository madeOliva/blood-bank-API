import { Test, TestingModule } from '@nestjs/testing';
import { HctransfusionesService } from './hctransfusiones.service';

describe('HctransfusionesService', () => {
  let service: HctransfusionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HctransfusionesService],
    }).compile();

    service = module.get<HctransfusionesService>(HctransfusionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
