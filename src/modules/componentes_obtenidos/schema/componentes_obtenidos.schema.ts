import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types, Document, Schema as MongooseSchema } from 'mongoose';
import { Centrifugacion } from 'src/modules/centrifugacion/schema/centrifugacion.schema';
import { RegistroDonacion } from 'src/modules/registro_donacion/schemas/registro_donacion.schema';

export type ComponentesObtenidosDocument = ComponentesObtenidos & Document;

// 1. Define el esquema del subdocumento explícitamente con _id: true
export const ComponenteSchema = new MongooseSchema(
  {
    tipo: { type: String, required: true, enum: ['CEPL','CEAD', 'CE' , 'CP','SP','SC','PC','BC', 'PFC', 'CRIO'] },
    volumen: { type: Number, required: true },
    envio_industria: { type: Boolean, default: false },
    no_lote: { type: String },
    fecha_obtencion: { type: String },
    estado_obtencion:{type: String, required: true, enum: ['obtenido', 'baja', 'pendiente', 'liberado', 'desechada']},
    causa_baja: { type: String, require:true },
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

 

  @Prop({ type: [ComponenteSchema] }) // Usa el esquema explícito aquí
  componentes: any[];

 

  @Prop()
  fecha_obtencion: Date;
}

export const ComponentesObtenidosSchema = SchemaFactory.createForClass(ComponentesObtenidos);