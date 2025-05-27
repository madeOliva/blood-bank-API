import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Estados } from 'src/modules/estados/schemas/estados.schemas';
import { Reacciones } from 'src/modules/reacciones/schemas/reacciones.schemas';


@Schema()
export class Donacion {
  @Prop({ required: true, unique: true })
  no_tubuladura: string;

  @Prop({ required: true })
  no_lote: string;

  @Prop()
  ci_donante: string;

  @Prop({ type: Types.ObjectId, ref: Estados.name, required: true })
  estado: Types.ObjectId; //Nomenclador

  @Prop({ type: Types.ObjectId, ref: Reacciones.name, required: true })
  reaccion: Types.ObjectId; //Nomenclador

  @Prop({ default: Date.now })
  fecha: Date;

  @Prop()
  nombre_tecnico: string;

  @Prop({ default: false })
  es_desecho: boolean;


  @Prop()
  numero_consecutivo: number;

  //Donacion de Sangre
  @Prop({ required: true })
  tipo_bolsa: string;

  @Prop({ required: true })
  volumen: number;

  //Donacion de Plasma
  @Prop({ required: true })
  TCM: number;

  @Prop({ required: true })
  TP: number;

  @Prop({ required: true })
  tiempo: number; //en segundos

  @Prop({ required: true })
  ciclos: number;

  @Prop({ required: true })
  ACD: string;

  @Prop({ required: true })
  no_lote_kitACD: string;

  @Prop({ required: true })
  no_lote_kitBach: string;
  

  //Laboratorio
  

  @Prop()
  resultado_VIH: boolean[];

  @Prop()
  resultado_hepatitisB: boolean[];

  @Prop()
  resultado_hepatitisC: boolean[];

  @Prop()
  confirmatoria_hepatitisB: boolean[];

  @Prop()
  resultado_tipage: string[];

  @Prop()
  resultado_contratipaje: string[];

  @Prop()
  resultado_DU: boolean[];

  @Prop()
  resultado_serologia: boolean[];

  @Prop()
  resultado_eritro: number[];

  @Prop()
  resultado_hematocrito: number[];

  @Prop()
  resultado_proteinas_totales: number[];

  @Prop()
  resultado_TGP: number[];

  @Prop()
  resultado_hemoglobina: number[];
}
export const DonacionSchema = SchemaFactory.createForClass(Donacion);
