import { Test, TestingModule } from '@nestjs/testing';
import { ListadoPacientesController } from './listado-pacientes.controller';
import { ListadoPacientesService } from './listado-pacientes.service';

describe('ListadoPacientesController', () => {
  let controller: ListadoPacientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListadoPacientesController],
      providers: [ListadoPacientesService],
    }).compile();

    controller = module.get<ListadoPacientesController>(ListadoPacientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
