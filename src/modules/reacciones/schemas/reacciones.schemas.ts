import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Reacciones extends Document {
  @Prop({ required: true })
  nombre_estado: string;
}

export const ReaccionesSchema = SchemaFactory.createForClass(Reacciones);