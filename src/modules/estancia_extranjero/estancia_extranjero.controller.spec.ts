import { Test, TestingModule } from '@nestjs/testing';
import { EstanciaExtranjeroController } from './estancia_extranjero.controller';
import { EstanciaExtranjeroService } from './estancia_extranjero.service';

describe('EstanciaExtranjeroController', () => {
  let controller: EstanciaExtranjeroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstanciaExtranjeroController],
      providers: [EstanciaExtranjeroService],
    }).compile();

    controller = module.get<EstanciaExtranjeroController>(EstanciaExtranjeroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
