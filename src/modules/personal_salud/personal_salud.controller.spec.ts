import { Test, TestingModule } from '@nestjs/testing';
import { PersonalSaludController } from './personal_salud.controller';
import { PersonalSaludService } from './personal_salud.service';

describe('PersonalSaludController', () => {
  let controller: PersonalSaludController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalSaludController],
      providers: [PersonalSaludService],
    }).compile();

    controller = module.get<PersonalSaludController>(PersonalSaludController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
