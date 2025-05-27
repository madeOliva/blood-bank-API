import { Module } from '@nestjs/common';
import { PruebaspostransfusionalesService } from './pruebaspostransfusionales.service';
import { PruebaspostransfusionalesController } from './pruebaspostransfusionales.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pruebasposttransfusionales, PruebasposttransfusionalesSchema } from './schema/pruebasposttransfusionales.schema';



@Module({
  controllers: [PruebaspostransfusionalesController],
  providers: [PruebaspostransfusionalesService],

  imports: [MongooseModule.forFeature([{
    name: Pruebasposttransfusionales.name,
    schema: PruebasposttransfusionalesSchema,},]),],
  exports: [MongooseModule]
})
export class PruebaspostransfusionalesModule { }
