import { Module } from '@nestjs/common';
import { GruposSanguineosService } from './grupos_sanguineos.service';
import { GruposSanguineosController } from './grupos_sanguineos.controller';
import { GruposSanguineos, GruposSanguineosSchema } from './schema/grupos_sanguineo.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
      MongooseModule.forFeature([
        {name:GruposSanguineos.name, schema: GruposSanguineosSchema},
      ])
    ],
  controllers: [GruposSanguineosController],
  providers: [GruposSanguineosService],
})
export class GruposSanguineosModule {}
