import { Module } from '@nestjs/common';
import { PedidosDevolucionesService } from './pedidos_devoluciones.service';
import { PedidosController } from './pedidos_devoluciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidosCentral, PedidosCentralSchema, PedidosFarmacia, PedidosFarmaciaSchema, PedidosMensual, PedidosMensualSchema, PedidosViveres, PedidosViveresSchema } from './entities/pedidos_devolucione.entity';
import { PedidosDevoluciones, PedidosDevolucionesSchema } from './schema/pedidos_devoluciones.schema';

@Module({
  imports: [
  MongooseModule.forFeature([
  { name: PedidosDevoluciones.name, schema: PedidosDevolucionesSchema },
  { name: PedidosCentral.name, schema: PedidosCentralSchema },
  { name: PedidosFarmacia.name, schema: PedidosFarmaciaSchema },
  { name: PedidosMensual.name, schema: PedidosMensualSchema },
  { name: PedidosViveres.name, schema: PedidosViveresSchema },
]),
  ],
  controllers: [PedidosController],
  providers: [PedidosDevolucionesService],
})
export class PedidosDevolucionesModule {}