import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Historia_Clinica } from 'src/modules/historia_clinica/schema/historia_clinica.schema';
import { RegistroDonacion } from 'src/modules/registro_donacion/schemas/registro_donacion.schema';

export type CentrifugacionDocument = Centrifugacion & Document;

@Schema({ timestamps: true })
export class Centrifugacion {
//  @Prop({ required: true, unique: true })
  //no_hc: string;

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