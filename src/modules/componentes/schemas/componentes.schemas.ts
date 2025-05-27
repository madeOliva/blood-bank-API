import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Componentes extends Document {

  @Prop({ required: true })
  nombre_componente: string;
}

export const ComponentesSchema = SchemaFactory.createForClass(Componentes);