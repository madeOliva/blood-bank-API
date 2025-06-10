import { Module } from '@nestjs/common';
import { ComponentesObtenidosService } from './componentes_obtenidos.service';
import { ComponentesObtenidosController } from './componentes_obtenidos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ComponentesObtenidos, ComponentesObtenidosSchema } from './schema/componentes_obtenidos.schema';
import { RegistroDonacion, RegistroDonacionSchema } from '../registro_donacion/schemas/registro_donacion.schema';
import { Historia_Clinica, Historia_ClinicaSchema } from '../historia_clinica/schema/historia_clinica.schema';


@Module({
   imports:[
      MongooseModule.forFeature([
      {name:ComponentesObtenidos.name, schema: ComponentesObtenidosSchema},  
        { name: Historia_Clinica.name, schema: Historia_ClinicaSchema },
             { name: RegistroDonacion.name, schema: RegistroDonacionSchema },
    ])
    ],
  
  controllers: [ComponentesObtenidosController],
  providers: [ComponentesObtenidosService],
  exports: [ComponentesObtenidosService],
})
export class ComponentesObtenidosModule {}
