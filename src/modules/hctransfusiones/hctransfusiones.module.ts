import { Module } from '@nestjs/common';
import { HctransfusionesService } from './hctransfusiones.service';
import { HctransfusionesController } from './hctransfusiones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hclinicatransfusiones, hclinicatransfusionesSchema } from './schema/hclinicatransfusiones.schema';

@Module({
  controllers: [HctransfusionesController],
  providers: [HctransfusionesService],

   imports: [
      MongooseModule.forFeature([
        {
          name: Hclinicatransfusiones.name,
          schema: hclinicatransfusionesSchema,
        },
      ]),
    ],
  exports: [MongooseModule],
})
export class HctransfusionesModule {}
