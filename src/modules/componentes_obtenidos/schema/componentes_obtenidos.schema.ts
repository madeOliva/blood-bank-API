import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type ComponentesObtenidosDocument = ComponentesObtenidos & Document;

class Componentes {
  @Prop({ required: true, enum: ['CEPL', 'CP', 'PFC', 'CRIO'] })
  tipo: string;

  @Prop({ required: true })
  volumen: number;

  @Prop({ default: false })
  envio_industria: boolean;

  @Prop()
  no_lote: string;
}

@Schema({ timestamps: true })
export class ComponentesObtenidos {
  @Prop({ required: true })
  no_consecutivo: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'RegistroDonacion',
    index: true,
    required: true,
  })
  registro_donacion: Types.ObjectId;

  @Prop({ required: true, enum: ['obtenido', 'baja', 'pendiente'] })
  estado_obtencion: string;

  @Prop({ type: [Componentes] })
  componentes: Componentes[];

  @Prop({ enum: ['Ictero', 'Lipemia', 'Hemolisis', 'Rotura'] })
  causa_baja: string;

  @Prop()
  fecha_obtencion: Date;
}

export const ComponentesObtenidosSchema = SchemaFactory.createForClass(ComponentesObtenidos);