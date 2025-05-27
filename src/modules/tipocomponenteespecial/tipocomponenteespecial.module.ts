import { Module } from '@nestjs/common';
import { TipocomponenteespecialService } from './tipocomponenteespecial.service';
import { TipocomponenteespecialController } from './tipocomponenteespecial.controller';

@Module({
  controllers: [TipocomponenteespecialController],
  providers: [TipocomponenteespecialService],
})
export class TipocomponenteespecialModule {}
