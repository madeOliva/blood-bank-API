import { Module } from '@nestjs/common';
import { TipocomponentehabitualService } from './tipocomponentehabitual.service';
import { TipocomponentehabitualController } from './tipocomponentehabitual.controller';

@Module({
  controllers: [TipocomponentehabitualController],
  providers: [TipocomponentehabitualService],
})
export class TipocomponentehabitualModule {}
