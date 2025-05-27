import { Module } from '@nestjs/common';
import { CentrifugacionService } from './centrifugacion.service';
import { CentrifugacionController } from './centrifugacion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Centrifugacion, CentrifugacionSchema } from './schema/centrifugacion.schema';



@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Centrifugacion.name, schema: CentrifugacionSchema},
      
  ])
  ],
  controllers: [CentrifugacionController],
  providers: [CentrifugacionService],
})
export class CentrifugacionModule {}
