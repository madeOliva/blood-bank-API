import { Module } from '@nestjs/common';
import { PruebaspretransfusionalesService } from './pruebaspretransfusionales.service';
import { PruebaspretransfusionalesController } from './pruebaspretransfusionales.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pruebaspretransfusionales, PruebaspretransfusionalesSchema } from './schema/pruebaspretransfusionales.schema';



@Module({
  controllers: [PruebaspretransfusionalesController],
  providers: [PruebaspretransfusionalesService],

  imports: [MongooseModule.forFeature([{
      name: Pruebaspretransfusionales.name,
      schema: PruebaspretransfusionalesSchema,},]),],
  exports: [MongooseModule],
})
export class PruebaspretransfusionalesModule {}
