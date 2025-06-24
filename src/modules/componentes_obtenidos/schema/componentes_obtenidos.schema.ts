import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types, Document } from 'mongoose';
import { Centrifugacion } from 'src/modules/centrifugacion/schema/centrifugacion.schema';
import { RegistroDonacion } from 'src/modules/registro_donacion/schemas/registro_donacion.schema';

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

@Schema({ collection: 'componentes_obtenidos'})
export class ComponentesObtenidos {
  @Prop({ required: true })
  no_consecutivo: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Centrifugacion' })
centrifugacion: Centrifugacion;

@Prop({ type: Types.ObjectId, ref: 'RegistroDonacion' })
registro_donacion: RegistroDonacion;

  @Prop({ required: true, enum: ['obtenido', 'baja', 'pendiente', 'liberado', 'desechada'] })
  estado_obtencion: string;

  @Prop({ type: [Componentes] })
  componentes: Componentes[];

  @Prop({ enum: ['Ictero', 'Lipemia', 'Hemolisis', 'Rotura'] })
  causa_baja: string;

  @Prop()
  fecha_obtencion: Date;
}

export const ComponentesObtenidosSchema = SchemaFactory.createForClass(ComponentesObtenidos);