import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Estados extends Document {
  @Prop({ required: true })
  nombre_estado: string;
}

export const EstadosSchema = SchemaFactory.createForClass(Estados);