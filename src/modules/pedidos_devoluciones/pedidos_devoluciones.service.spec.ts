import { Test, TestingModule } from '@nestjs/testing';
import { PedidosDevolucionesService } from './pedidos_devoluciones.service';

describe('PedidosDevolucionesService', () => {
  let service: PedidosDevolucionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidosDevolucionesService],
    }).compile();

    service = module.get<PedidosDevolucionesService>(PedidosDevolucionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
