import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CalidadDocument = HydratedDocument<Calidad>;

@Schema()
export class Calidad {
  @Prop({ required: true, unique: true })
  no_tubuladura: string;

  @Prop({ type: Date, required: false, default: Date.now })
  fecha_recibido: Date;

  @Prop({ type: Date, required: false, default: Date.now })
  fecha_entrega: Date;
        
  @Prop({ required: true })
  estado: string;
}
  
export const CalidadSchema = SchemaFactory.createForClass(Calidad);
              