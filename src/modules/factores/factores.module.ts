import { Module } from '@nestjs/common';
import { FactoresService } from './factores.service';
import { FactoresController } from './factores.controller';
import { Factores, FactoresSchema } from './schemas/factore.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
      MongooseModule.forFeature([
        {name:Factores.name, schema: FactoresSchema},
      ])
    ],
  controllers: [FactoresController],
  providers: [FactoresService],
})
export class FactoresModule {}
