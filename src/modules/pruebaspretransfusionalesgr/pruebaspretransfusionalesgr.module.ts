import { Module } from '@nestjs/common';
import { PruebaspretransfusionalesgrService } from './pruebaspretransfusionalesgr.service';
import { PruebaspretransfusionalesgrController } from './pruebaspretransfusionalesgr.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { pruebaspretransfusionalesgr, pruebaspretransfusionalesgrSchema } from './schemas/pruebaspretransfusionalesgr.schema';


@Module({
  controllers: [PruebaspretransfusionalesgrController],
  providers: [PruebaspretransfusionalesgrService],

  imports: [MongooseModule.forFeature([{
    name: pruebaspretransfusionalesgr.name,
    schema: pruebaspretransfusionalesgrSchema,
  },]),],
  exports: [MongooseModule],
})
export class PruebaspretransfusionalesgrModule { }
