import { Test, TestingModule } from '@nestjs/testing';
import { ColorPielService } from './color_piel.service';

describe('ColorPielService', () => {
  let service: ColorPielService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColorPielService],
    }).compile();

    service = module.get<ColorPielService>(ColorPielService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
