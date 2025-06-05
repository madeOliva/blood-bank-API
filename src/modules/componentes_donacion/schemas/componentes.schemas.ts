import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IntegerType } from 'mongodb';
import { Document, Types } from 'mongoose';

@Schema()
export class Componentes extends Document {

  @Prop({ required: true })
  nombreComponente: string;
  diasEsperaMasculino : number
  diasEsperaFemenino : number
  siglas: string;

}

export const ComponentesSchema = SchemaFactory.createForClass(Componentes);