import { Module } from '@nestjs/common';
import { ProvinciaService } from './provincia.service';
import { ProvinciaController } from './provincia.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Provincia } from './entities/provincia.entity';
import { ProvinciaSchema } from './schema/provincia.schema';

@Module({
  imports:[
   MongooseModule.forFeature([
    {name:Provincia.name, schema:ProvinciaSchema},
   ])
  ],
  controllers: [ProvinciaController],
  providers: [ProvinciaService],
})
export class ProvinciaModule {}
