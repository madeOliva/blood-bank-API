import { Module } from '@nestjs/common';
import { ResultadosdelaboratorioService } from './resultadosdelaboratorio.service';
import { ResultadosdelaboratorioController } from './resultadosdelaboratorio.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { resultadosdelaboratorio, resultadosdelaboratorioSchema } from './schemas/resultadosdelaboratorio.schema';

@Module({
  controllers: [ResultadosdelaboratorioController],
  providers: [ResultadosdelaboratorioService],
  imports: [MongooseModule.forFeature([{
      name: resultadosdelaboratorio.name,
      schema: resultadosdelaboratorioSchema,
    },]),],
    exports: [MongooseModule],
})
export class ResultadosdelaboratorioModule {}
