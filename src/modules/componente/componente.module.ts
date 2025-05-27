import { Module } from '@nestjs/common';
import { ComponenteService } from './componente.service';
import { ComponenteController } from './componente.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Componente } from './entities/componente.entity';
import { ComponenteSchema } from './schema/componente.schema';

@Module({
  imports:[
        MongooseModule.forFeature([
        {name:Componente.name, schema: ComponenteSchema},  
      ])
      ],
  controllers: [ComponenteController],
  providers: [ComponenteService],
})
export class ComponenteModule {}
