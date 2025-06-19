import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistroDonacionService } from './registro_donacion.service';
import { RegistroDonacion, RegistroDonacionSchema } from './schemas/registro_donacion.schema';
import { Persona, PersonaSchema } from '../persona/schema/persona.schema';
import { Historia_Clinica, Historia_ClinicaSchema } from '../historia_clinica/schema/historia_clinica.schema';
import { Donacion, DonacionSchema } from '../donacion/schemas/donacion.schemas';
import { Componentes, ComponentesSchema } from '../componentes_donacion/schemas/componentes.schemas';
import { RegistroDonacionController } from './registro_donacion.controller';
import { Sexo, SexoSchema } from '../sexo/schema/sexo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RegistroDonacion.name, schema: RegistroDonacionSchema },
      { name: Persona.name, schema: PersonaSchema },
      { name: Historia_Clinica.name, schema: Historia_ClinicaSchema },
      { name: Donacion.name, schema: DonacionSchema },
      { name: Componentes.name, schema: ComponentesSchema },
      { name: Sexo.name, schema: SexoSchema },
    ]),
  ],
  controllers: [RegistroDonacionController],
  providers: [RegistroDonacionService],
  exports: [RegistroDonacionService],
})
export class RegistroDonacionModule {}