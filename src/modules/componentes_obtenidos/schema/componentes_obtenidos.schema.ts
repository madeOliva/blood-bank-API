import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Historia_Clinica } from 'src/modules/historia_clinica/schema/historia_clinica.schema';
import { RegistroDonacion } from 'src/modules/registro_donacion/schemas/registro_donacion.schema';

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
  no_consecutivo: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, 
      ref: 'Historia_Clinica' 
    })
    historia_clinica: Historia_Clinica;
  
    @Prop({ type: mongoose.Schema.Types.ObjectId, 
      ref: 'Registro_Donacion' 
    })
    registro_donacion: RegistroDonacion;

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