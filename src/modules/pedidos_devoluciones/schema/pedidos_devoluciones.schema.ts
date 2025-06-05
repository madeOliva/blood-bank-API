import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type PedidosDocument = HydratedDocument<PedidosDevoluciones>;

// src/modules/pedidos_devoluciones/schema/pedidos_devoluciones.schema.ts
@Schema()
export class PedidosDevoluciones extends Document {
  @Prop({ required: true }) planId: string;
  @Prop({ required: true }) cantidad: number;
}
export const PedidosDevolucionesSchema = SchemaFactory.createForClass(PedidosDevoluciones);