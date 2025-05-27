import { Module } from '@nestjs/common';
import { CalidadService } from './calidad.service';
import { CalidadController } from './calidad.controller';
import { Calidad } from './entities/calidad.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CalidadSchema } from './schema/calidad.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: Calidad.name, schema:CalidadSchema},
    ])
  ],
  controllers: [CalidadController],
  providers: [CalidadService],
})
export class CalidadModule {}
