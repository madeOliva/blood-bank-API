import { Test, TestingModule } from '@nestjs/testing';
import { ComponentesatransfundirController } from './componentesatransfundir.controller';
import { ComponentesatransfundirService } from './componentesatransfundir.service';

describe('ComponentesatransfundirController', () => {
  let controller: ComponentesatransfundirController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponentesatransfundirController],
      providers: [ComponentesatransfundirService],
    }).compile();

    controller = module.get<ComponentesatransfundirController>(ComponentesatransfundirController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
