import { Module } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { EstadosController } from './estados.controller';
import { Estados, EstadosSchema } from './schemas/estados.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Estados.name, schema: EstadosSchema }]),
  ],
  providers: [EstadosService],
  controllers: [EstadosController]
})
export class EstadosModule {}
