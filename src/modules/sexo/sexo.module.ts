import { Module } from '@nestjs/common';
import { SexoService } from './sexo.service';
import { SexoController } from './sexo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sexo} from './entities/sexo.entity';
import { SexoSchema} from './schema/sexo.schema';


@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Sexo.name, schema: SexoSchema},
    ])
  ],
  controllers: [SexoController],
  providers: [SexoService],
})

export class SexoModule {}

