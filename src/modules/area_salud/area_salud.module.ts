import { MongooseModule } from '@nestjs/mongoose';
import { AreaSalud, Area_SaludSchema } from './schema/area_salud.schema'; // Ajusta la ruta
import { AreaSaludService } from './area_salud.service';
import { Module } from '@nestjs/common';
import { AreaSaludController } from './area_salud.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AreaSalud.name, schema: Area_SaludSchema }, 
    ]),
  ],
  providers: [AreaSaludService],
  controllers: [AreaSaludController],
})
export class AreaSaludModule {}
