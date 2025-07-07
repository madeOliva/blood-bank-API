import { Module } from '@nestjs/common';
import { ProcesodetransfusionService } from './procesodetransfusion.service';
import { ProcesodetransfusionController } from './procesodetransfusion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { procesodetransfusion, procesodetransfusionSchema } from './schemas/procesodetransfusion.schema';

@Module({
  controllers: [ProcesodetransfusionController],
  providers: [ProcesodetransfusionService],
  imports: [MongooseModule.forFeature([{
        name: procesodetransfusion.name,
        schema: procesodetransfusionSchema,},]),],
      exports: [MongooseModule],
})
export class ProcesodetransfusionModule {}
