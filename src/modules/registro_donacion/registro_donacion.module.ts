import { Module } from '@nestjs/common';
import { RegistroDonacionService } from './registro_donacion.service';
import { RegistroDonacionController } from './registro_donacion.controller';
import { RegistroDonacion, RegistroDonacionSchema } from './schemas/registro_donacion.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Persona, PersonaSchema } from '../persona/schema/persona.schema';
import { Historia_Clinica, Historia_ClinicaSchema } from '../historia_clinica/schema/historia_clinica.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RegistroDonacion.name, schema: RegistroDonacionSchema },
      { name: Persona.name, schema: PersonaSchema },
      { name: Historia_Clinica.name, schema: Historia_ClinicaSchema }
    ]),
  ],
  providers: [RegistroDonacionService],
  controllers: [RegistroDonacionController]
})
export class RegistroDonacionModule {}
