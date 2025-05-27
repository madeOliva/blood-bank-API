import { Module } from '@nestjs/common';
import { TipocomponenteService } from './tipocomponente.service';
import { TipocomponenteController } from './tipocomponente.controller';

@Module({
  controllers: [TipocomponenteController],
  providers: [TipocomponenteService],
})
export class TipocomponenteModule {}
