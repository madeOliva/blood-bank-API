import { Module } from '@nestjs/common';
import { HistoriaClinicaService } from './historia_clinica.service';
import { HistoriaClinicaController } from './historia_clinica.controller';
import { HistoriaClinica } from './entities/historia_clinica.entity';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Historia_Clinica,
  Historia_ClinicaSchema,
} from './schema/historia_clinica.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Historia_Clinica.name, schema: Historia_ClinicaSchema },
    ]),
  ],
  controllers: [HistoriaClinicaController],
  providers: [HistoriaClinicaService],
})
export class HistoriaClinicaModule {}
