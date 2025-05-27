import { Module } from '@nestjs/common';
import { DonacionController } from './donacion.controller';
import { DonacionService } from './donacion.service';
import { Donacion, DonacionSchema } from './schemas/donacion.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [
    MongooseModule.forFeature([{ name: Donacion.name, schema: DonacionSchema }]),
  ],
  controllers: [DonacionController],
  providers: [DonacionService]
})
export class DonacionModule {}
