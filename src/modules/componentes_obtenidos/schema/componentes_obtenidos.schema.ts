import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ComponentesObtenidosDocument = ComponentesObtenidos & Document;

class Componentes {
  @Prop({
    required: true,
    enum: ['CEPL', 'CP', 'PFC', 'CRIO']
  })
  tipo: string;

  @Prop({ required: true })
  volumen: number;

  @Prop({ default: false })
  envio_industria: boolean;

  @Prop()
  no_lote: string; // Solo requerido si envio_industria es true
}

@Schema({ timestamps: true })
export class ComponentesObtenidos {
  @Prop({ required: true })
  no_hc: string;

  @Prop({ required: true })
  no_consecutivo: string;

  @Prop({
    required: true,
    enum: ['obtenido', 'baja', 'pendiente']
  })
  estado_obtencion: string;

  @Prop({ type: [Componentes] })
  componentes: Componentes[];

  @Prop({
    enum: ['Ictero', 'Lipemia', 'Hemolisis', 'Rotura']
  })
  causa_baja: string;

  @Prop()
  fecha_obtencion: Date;

 
}

export const ComponentesObtenidosSchema = SchemaFactory.createForClass(ComponentesObtenidos);