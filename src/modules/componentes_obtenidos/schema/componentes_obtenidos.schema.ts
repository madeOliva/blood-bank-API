import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types, Document, Schema as MongooseSchema } from 'mongoose';
import { Centrifugacion } from 'src/modules/centrifugacion/schema/centrifugacion.schema';
import { RegistroDonacion } from 'src/modules/registro_donacion/schemas/registro_donacion.schema';

export type ComponentesObtenidosDocument = ComponentesObtenidos & Document;

// 1. Define el esquema del subdocumento explícitamente con _id: true
export const ComponenteSchema = new MongooseSchema(
  {
    tipo: { type: String, required: true, enum: ['CEPL', 'CP', 'PFC', 'CRIO'] },
    volumen: { type: Number, required: true },
    envio_industria: { type: Boolean, default: false },
    no_lote: { type: String },
    fecha_obtencion: { type: String },
    // otros campos si los necesitas...
  },
  { _id: true } // Esto asegura que cada componente tendrá un _id
);

@Schema({ collection: 'componentes_obtenidos' })
export class ComponentesObtenidos {
  @Prop({ required: true })
  no_consecutivo: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Centrifugacion' })
  centrifugacion: Centrifugacion;

  @Prop({ type: Types.ObjectId, ref: 'RegistroDonacion' })
  registro_donacion: RegistroDonacion;

  @Prop({ required: true, enum: ['obtenido', 'baja', 'pendiente', 'liberado', 'desechada'] })
  estado_obtencion: string;

  @Prop({ type: [ComponenteSchema] }) // Usa el esquema explícito aquí
  componentes: any[];

  @Prop({ enum: ['Ictero', 'Lipemia', 'Hemolisis', 'Rotura'] })
  causa_baja: string;

  @Prop()
  fecha_obtencion: Date;
}

export const ComponentesObtenidosSchema = SchemaFactory.createForClass(ComponentesObtenidos);