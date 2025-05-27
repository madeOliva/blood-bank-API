import { Test, TestingModule } from '@nestjs/testing';
import { AntecedentesPersonalesService } from './antecedentes_personales.service';

describe('AntecedentesPersonalesService', () => {
  let service: AntecedentesPersonalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AntecedentesPersonalesService],
    }).compile();

    service = module.get<AntecedentesPersonalesService>(AntecedentesPersonalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
