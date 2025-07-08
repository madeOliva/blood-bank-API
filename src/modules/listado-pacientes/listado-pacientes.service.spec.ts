import { Test, TestingModule } from '@nestjs/testing';
import { ListadoPacientesService } from './listado-pacientes.service';

describe('ListadoPacientesService', () => {
  let service: ListadoPacientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListadoPacientesService],
    }).compile();

    service = module.get<ListadoPacientesService>(ListadoPacientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
