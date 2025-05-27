import { Test, TestingModule } from '@nestjs/testing';
import { ComponentesObtenidosService } from './componentes_obtenidos.service';

describe('ComponentesObtenidosService', () => {
  let service: ComponentesObtenidosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponentesObtenidosService],
    }).compile();

    service = module.get<ComponentesObtenidosService>(ComponentesObtenidosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
