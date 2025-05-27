import { Test, TestingModule } from '@nestjs/testing';
import { AntecedentesPersonalesController } from './antecedentes_personales.controller';
import { AntecedentesPersonalesService } from './antecedentes_personales.service';

describe('AntecedentesPersonalesController', () => {
  let controller: AntecedentesPersonalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AntecedentesPersonalesController],
      providers: [AntecedentesPersonalesService],
    }).compile();

    controller = module.get<AntecedentesPersonalesController>(AntecedentesPersonalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
