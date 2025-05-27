import { Module } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { MunicipioSchema } from './schema/municipio.schema'; 
import { MongooseModule } from '@nestjs/mongoose';
import { Municipio } from './schema/municipio.schema'; 
import { MunicipioController } from './municipio.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Municipio.name, schema: MunicipioSchema }, // ✅ Nombre correcto
    ]),
  ],
  providers: [MunicipioService],
  controllers: [MunicipioController],
})
export class MunicipioModule {}
