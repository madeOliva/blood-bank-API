import { Module } from '@nestjs/common';
import { TipopacienteService } from './tipopaciente.service';
import { TipopacienteController } from './tipopaciente.controller';

@Module({
  controllers: [TipopacienteController],
  providers: [TipopacienteService],
})
export class TipopacienteModule {}
