import { Module } from '@nestjs/common';
import { MongooseModule,Schema } from '@nestjs/mongoose';
import { SalaService } from './sala.service';
import { SalaController } from './sala.controller';
import { Sala, SalaSchema} from './schema/sala';

@Module({
   imports:[
      MongooseModule.forFeature([
        {name: Sala.name, schema: SalaSchema},
      ])
    ],

  controllers: [SalaController],
  providers: [SalaService],
})
export class SalaModule {}
