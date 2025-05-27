import { Test, TestingModule } from '@nestjs/testing';
import { AreaSaludController } from './area_salud.controller';
import { AreaSaludService } from './area_salud.service';

describe('AreaSaludController', () => {
  let controller: AreaSaludController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AreaSaludController],
      providers: [AreaSaludService],
    }).compile();

    controller = module.get<AreaSaludController>(AreaSaludController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
