import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistroDonacionService } from './registro_donacion.service';
import { RegistroDonacion, RegistroDonacionSchema } from './schemas/registro_donacion.schema';
import { Persona, PersonaSchema } from '../persona/schema/persona.schema';
import { Historia_Clinica, Historia_ClinicaSchema } from '../historia_clinica/schema/historia_clinica.schema';
import { Donacion, DonacionSchema } from '../donacion/schemas/donacion.schemas'; // <-- IMPORTANTE
import { Componentes, ComponentesSchema } from '../componentes_donacion/schemas/componentes.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RegistroDonacion.name, schema: RegistroDonacionSchema },
      { name: Persona.name, schema: PersonaSchema },
      { name: Historia_Clinica.name, schema: Historia_ClinicaSchema },
      { name: Donacion.name, schema: DonacionSchema }, // <-- AGREGA ESTA LÍNEA
      { name: Componentes.name, schema: ComponentesSchema },
    ]),
  ],
  providers: [RegistroDonacionService],
  exports: [RegistroDonacionService],
})
export class RegistroDonacionModule {}