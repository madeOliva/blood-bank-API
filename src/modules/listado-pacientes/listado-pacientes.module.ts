import { Module } from '@nestjs/common';
import { ListadoPacientesService } from './listado-pacientes.service';
import { ListadoPacientesController } from './listado-pacientes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { listadoPacientes, listadoPacientesSchema } from './schemas/listado-pacientes.schema';

@Module({
  imports:[
      MongooseModule.forFeature([
        {name: listadoPacientes.name, schema: listadoPacientesSchema},
      ])
    ],
  controllers: [ListadoPacientesController],
  providers: [ListadoPacientesService],
})
export class ListadoPacientesModule {}
