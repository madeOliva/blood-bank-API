import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type PedidosDocument = HydratedDocument<PedidosDevoluciones>;



@Schema()
export class PedidosDevoluciones extends Document {
  @Prop({ required: true })
  torundas_algodon: number;

  @Prop({ required: true })
  torundas_gaza: number;

  @Prop({ required: true })
  apositos: number;

  @Prop({ required: true })
  guantes: number;

  @Prop({ required: true })
  equipos_pinzas: number;

  @Prop({ required: true })
  frascos_esteriles: number;

  @Prop({ required: true })
  bolsas_colectoras: number;

  @Prop({ required: true })
  alcohol: number;

  @Prop({ required: true })
  hemoclasificadores: number;

  @Prop({ required: true })
  hipoclorito: number;

  @Prop({ required: true })
  tubos_ensayo: number;

  @Prop({ required: true })
  gradillas: number;

  @Prop({ required: true })
  sulfato_cobre: number;

  @Prop({ required: true })
  ligaduras: number;

  @Prop({ required: true })
  lancetas: number;

  @Prop({ required: true })
  laminas_portaobjeto: number;

  @Prop({ required: true })
  cloruro_sodio: number;

  @Prop({ required: true })
  ringer_lactato: number;

  @Prop({ required: true })
  equipos_suero: number;

  @Prop({ required: true })
  tohallas: number;

  @Prop({ required: true })
  jabon: number;

  @Prop({ required: true })
  detergente: number;

  @Prop({ required: true })
  vasos: number;

  @Prop({ required: true })
  cubiertos: number;

  @Prop({ required: true })
  platos: number;

  @Prop({ required: true })
  termos: number;

  @Prop({ required: true })
  jarras: number;

  @Prop({ required: true })
  bandejas: number;

  @Prop({ required: true })
  pesas: number;

  @Prop({ required: true })
  sirope: number;

  @Prop({ required: true })
  pan_embutido: number;

  @Prop({ required: true })
  queso: number;

  @Prop({ required: true })
  leche: number;

  @Prop({ required: true })
  yogurt: number;

  @Prop({ required: true })
  azucar: number;

  @Prop({ required: true })
  cafe: number;

  @Prop({ required: true })
  helado: number;

  @Prop({ required: true })
  devoluciones: number;
}

export const PedidosDevolucionesSchema = SchemaFactory.createForClass(PedidosDevoluciones);
