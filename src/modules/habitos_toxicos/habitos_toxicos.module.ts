import { Module } from '@nestjs/common';
import { HabitosToxicosService } from './habitos_toxicos.service';
import { HabitosToxicosController } from './habitos_toxicos.controller';
import { Habitos_Toxicos, Habitos_ToxicosSchema } from './schema/habitos_toxicos.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [
      MongooseModule.forFeature([
        { name: Habitos_Toxicos.name, schema: Habitos_ToxicosSchema},
      ]),
    ],
  controllers: [HabitosToxicosController],
  providers: [HabitosToxicosService],
})
export class HabitosToxicosModule {}
