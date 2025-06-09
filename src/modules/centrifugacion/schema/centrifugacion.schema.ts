import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CentrifugacionDocument = Centrifugacion & Document;

@Schema({ timestamps: true })
export class Centrifugacion {
  @Prop({ required: true, unique: true })
  no_hc: string;

  @Prop({ required: true })
  no_consecutivo: string;

  @Prop({ 
    required: true,
    enum: ['CEPL', 'CP', 'PFC', 'CRIO'] 
  })
  componente_a_obtener: string;

  @Prop({ required: true })
  no_centrifuga: number;

  @Prop({ required: true })
  temperatura: number;

  @Prop({ required: true })
  velocidad: number;
  
  @Prop({
    type: String,
    enum: ['Pendiente', 'Obtenido', 'Baja'],
    default: 'pendiente'
  })
  estado_obtencion: string;
}

export const CentrifugacionSchema = SchemaFactory.createForClass(Centrifugacion);