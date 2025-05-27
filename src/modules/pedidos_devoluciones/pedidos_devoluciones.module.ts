import { Module } from '@nestjs/common';
import { PedidosDevolucionesService } from './pedidos_devoluciones.service';
import { PedidosController } from './pedidos_devoluciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidosDevoluciones, PedidosDevolucionesSchema } from './schema/pedidos_devoluciones.schema';

@Module({

   // Si usas Mongoose:
imports: [MongooseModule.forFeature([{ name: PedidosDevoluciones.name, schema: PedidosDevolucionesSchema }

]),
],

  controllers: [PedidosController],
  providers: [PedidosDevolucionesService],
})
export class PedidosDevolucionesModule {}
