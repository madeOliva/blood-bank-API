import { Module } from '@nestjs/common';
import { PruebaspretransfusionalesService } from './pruebaspretransfusionales.service';
import { PruebaspretransfusionalesController } from './pruebaspretransfusionales.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { pruebaspretransfusionales, pruebaspretransfusionalesSchema } from './schema/pruebaspretransfusionales.schema';

@Module({
  controllers: [PruebaspretransfusionalesController],
  providers: [PruebaspretransfusionalesService],

  imports: [MongooseModule.forFeature([{
      name: pruebaspretransfusionales.name,
      schema: pruebaspretransfusionalesSchema,},]),],
  exports: [MongooseModule],
})
export class PruebaspretransfusionalesModule {}
