import { Module } from '@nestjs/common';
import { PaisService } from './pais.service';
import { PaisController } from './pais.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pais, PaisSchema } from './schema/pais.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Pais.name, schema:PaisSchema},
    ])
  ],
  controllers: [PaisController],
  providers: [PaisService],
  exports: [MongooseModule],
})
export class PaisModule {}
