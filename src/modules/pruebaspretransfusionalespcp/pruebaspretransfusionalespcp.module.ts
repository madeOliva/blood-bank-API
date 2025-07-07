import { Module } from '@nestjs/common';
import { PruebaspretransfusionalespcpService } from './pruebaspretransfusionalespcp.service';
import { PruebaspretransfusionalespcpController } from './pruebaspretransfusionalespcp.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { pruebaspretransfusionalespcp, pruebaspretransfusionalespcpSchema } from './schemas/pruebaspretransfusionalespcp.schema';

@Module({
  controllers: [PruebaspretransfusionalespcpController],
  providers: [PruebaspretransfusionalespcpService],

  imports: [MongooseModule.forFeature([{
    name: pruebaspretransfusionalespcp.name,
    schema: pruebaspretransfusionalespcpSchema,
  },]),],
  exports: [MongooseModule],
})
export class PruebaspretransfusionalespcpModule { }
