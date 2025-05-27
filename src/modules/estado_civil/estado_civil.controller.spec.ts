import { Test, TestingModule } from '@nestjs/testing';
import { EstadoCivilController } from './estado_civil.controller';
import { EstadoCivilService } from './estado_civil.service';

describe('EstadoCivilController', () => {
  let controller: EstadoCivilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoCivilController],
      providers: [EstadoCivilService],
    }).compile();

    controller = module.get<EstadoCivilController>(EstadoCivilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
