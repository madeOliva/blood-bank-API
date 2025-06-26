import { Test, TestingModule } from '@nestjs/testing';
import { ComponentesatransfundirService } from './componentesatransfundir.service';

describe('ComponentesatransfundirService', () => {
  let service: ComponentesatransfundirService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponentesatransfundirService],
    }).compile();

    service = module.get<ComponentesatransfundirService>(ComponentesatransfundirService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
