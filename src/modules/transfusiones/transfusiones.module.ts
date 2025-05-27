import { Module } from '@nestjs/common';
import { TransfusionesService } from './transfusiones.service';
import { TransfusionesController } from './transfusiones.controller';
import { MongooseModule,Schema } from '@nestjs/mongoose';
import { Transfusiones, TransfusionesSchema } from './schema/transfusiones';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: Transfusiones.name, schema: TransfusionesSchema},
    ])
  ],
  controllers: [TransfusionesController],
  providers: [TransfusionesService],
})
export class TransfusionesModule {}
