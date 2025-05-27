import { Test, TestingModule } from '@nestjs/testing';
import { HabitosToxicosController } from './habitos_toxicos.controller';
import { HabitosToxicosService } from './habitos_toxicos.service';

describe('HabitosToxicosController', () => {
  let controller: HabitosToxicosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabitosToxicosController],
      providers: [HabitosToxicosService],
    }).compile();

    controller = module.get<HabitosToxicosController>(HabitosToxicosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
