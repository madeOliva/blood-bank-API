import { Module } from '@nestjs/common';
import { ComponentesController } from './componentes.controller';
import { ComponentesService } from './componentes.service';
import { Componentes, ComponentesSchema } from './schemas/componentes.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

   imports: [
    MongooseModule.forFeature([{ name: Componentes.name, schema: ComponentesSchema }]),
  ],
  controllers: [ComponentesController],
  providers: [ComponentesService]
})
export class ComponentesModule {}
