import { Test, TestingModule } from '@nestjs/testing';
import { RegistroDonacionService } from './registro_donacion.service';

describe('RegistroDonacionService', () => {
  let service: RegistroDonacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroDonacionService],
    }).compile();

    service = module.get<RegistroDonacionService>(RegistroDonacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
