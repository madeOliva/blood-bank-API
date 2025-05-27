import { Test, TestingModule } from '@nestjs/testing';
import { CalidadController } from './calidad.controller';
import { CalidadService } from './calidad.service';

describe('CalidadController', () => {
  let controller: CalidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalidadController],
      providers: [CalidadService],
    }).compile();

    controller = module.get<CalidadController>(CalidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
