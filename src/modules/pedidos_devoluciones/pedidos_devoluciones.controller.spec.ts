import { Test, TestingModule } from '@nestjs/testing';
import { PedidosDevolucionesController } from './pedidos_devoluciones.controller';
import { PedidosDevolucionesService } from './pedidos_devoluciones.service';

describe('PedidosDevolucionesController', () => {
  let controller: PedidosDevolucionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidosDevolucionesController],
      providers: [PedidosDevolucionesService],
    }).compile();

    controller = module.get<PedidosDevolucionesController>(PedidosDevolucionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
