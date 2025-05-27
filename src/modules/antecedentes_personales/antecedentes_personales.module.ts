import { Module } from '@nestjs/common';
import { AntecedentesPersonalesService } from './antecedentes_personales.service';
import { AntecedentesPersonalesController } from './antecedentes_personales.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AntecedentesPersonales, AntecedentesPersonalesSchema } from './schema/antecedentes_personales.schema';

@Module({
   imports:[
      MongooseModule.forFeature([
        {name:AntecedentesPersonales.name, schema:AntecedentesPersonalesSchema},
      ])
    ],
  controllers: [AntecedentesPersonalesController],
  providers: [AntecedentesPersonalesService],
})
export class AntecedentesPersonalesModule {}
