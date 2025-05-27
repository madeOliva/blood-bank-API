import { Module } from '@nestjs/common';
import { EstadoCivilService } from './estado_civil.service';
import { EstadoCivilController } from './estado_civil.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EstadoCivil} from './entities/estado_civil.entity';
import { EstadoCivilSchema} from './schema/estado_civil.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:EstadoCivil.name, schema: EstadoCivilSchema},
    ])
  ],
  controllers: [EstadoCivilController],
  providers: [EstadoCivilService],
})
export class EstadoCivilModule {}
