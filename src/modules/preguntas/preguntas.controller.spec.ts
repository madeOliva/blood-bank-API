import { Test, TestingModule } from '@nestjs/testing';
import { PreguntasController } from './pregunta.controller';
import { PreguntasService } from './pregunta.service';

describe('PreguntasController', () => {
  let controller: PreguntasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreguntasController],
      providers: [PreguntasService],
    }).compile();

    controller = module.get<PreguntasController>(PreguntasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
