import { Module } from '@nestjs/common';
import { ComponentesObtenidosService } from './componentes_obtenidos.service';
import { ComponentesObtenidosController } from './componentes_obtenidos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Componentes_Obtenidos, Componentes_ObtenidosSchema } from './schema/componentes_obtenidos.schema';


@Module({
   imports:[
      MongooseModule.forFeature([
      {name:Componentes_Obtenidos.name, schema: Componentes_ObtenidosSchema},  
    ])
    ],
  
  controllers: [ComponentesObtenidosController],
  providers: [ComponentesObtenidosService],
})
export class ComponentesObtenidosModule {}
