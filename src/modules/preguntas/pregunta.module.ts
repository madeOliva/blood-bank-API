import { Module } from '@nestjs/common';
import { PreguntaService } from './pregunta.service';
import { PreguntaController } from './pregunta.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pregunta, PreguntaSchema } from './schema/pregunta.schema';

@Module({
  controllers: [PreguntaController],
  providers: [PreguntaService],

  imports: [
    MongooseModule.forFeature([
      {
        name: Pregunta.name,
        schema: PreguntaSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class PreguntaModule { }
