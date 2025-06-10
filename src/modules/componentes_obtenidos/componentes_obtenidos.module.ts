import { Module } from '@nestjs/common';
import { ComponentesObtenidosService } from './componentes_obtenidos.service';
import { ComponentesObtenidosController } from './componentes_obtenidos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ComponentesObtenidos, ComponentesObtenidosSchema } from './schema/componentes_obtenidos.schema';


@Module({
   imports:[
   MongooseModule.forFeature([
  { name: ComponentesObtenidos.name, schema: ComponentesObtenidosSchema }
])
    ],
  
  controllers: [ComponentesObtenidosController],
  providers: [ComponentesObtenidosService],
  exports: [ComponentesObtenidosService],
})
export class ComponentesObtenidosModule {}
