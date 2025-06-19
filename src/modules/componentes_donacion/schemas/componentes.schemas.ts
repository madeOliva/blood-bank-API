import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Componentes extends Document {
  @Prop({ required: true })
  nombreComponente: string;

  @Prop({ required: true })
  diasEsperaMasculino: number;

  @Prop({ required: true })
  diasEsperaFemenino: number;

  @Prop({ required: true })
  siglas: string;
}

export const ComponentesSchema = SchemaFactory.createForClass(Componentes);
