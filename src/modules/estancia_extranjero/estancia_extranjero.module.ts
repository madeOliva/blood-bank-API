import { Module } from '@nestjs/common';
import { EstanciaExtranjeroService } from './estancia_extranjero.service';
import { EstanciaExtranjeroController } from './estancia_extranjero.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Estancia_Extranjero, Estancia_ExtranjeroSchema } from './schema/estancia_extranjero.schema';

@Module({

  imports: [
        MongooseModule.forFeature([
          { name: Estancia_Extranjero.name, schema: Estancia_ExtranjeroSchema},
        ]),
      ],
  controllers: [EstanciaExtranjeroController],
  providers: [EstanciaExtranjeroService],
})
export class EstanciaExtranjeroModule {}
