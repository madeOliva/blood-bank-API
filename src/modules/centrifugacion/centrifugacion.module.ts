import { Module } from '@nestjs/common';
import { CentrifugacionService } from './centrifugacion.service';
import { CentrifugacionController } from './centrifugacion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Centrifugacion, CentrifugacionSchema } from './schema/centrifugacion.schema';
import { Historia_Clinica, Historia_ClinicaSchema } from '../historia_clinica/schema/historia_clinica.schema';
import { RegistroDonacion, RegistroDonacionSchema } from '../registro_donacion/schemas/registro_donacion.schema';



@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Centrifugacion.name, schema: CentrifugacionSchema},
      { name: Historia_Clinica.name, schema: Historia_ClinicaSchema },
       { name: RegistroDonacion.name, schema: RegistroDonacionSchema },
  ])
  ],
  controllers: [CentrifugacionController],
  providers: [CentrifugacionService],
  exports: [CentrifugacionService]
})
export class CentrifugacionModule {}
