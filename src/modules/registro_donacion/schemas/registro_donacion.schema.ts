import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Componentes } from 'src/modules/componentes_donacion/schemas/componentes.schemas';
import { Estados } from 'src/modules/estados/schemas/estados.schemas';
import { Historia_Clinica } from 'src/modules/historia_clinica/schema/historia_clinica.schema';
import { Reacciones } from 'src/modules/reacciones/schemas/reacciones.schemas';

@Schema()
export class RegistroDonacion {
  @Prop({ unique: true })
  no_registro: string;

  // @Prop({
  //   type: Types.ObjectId,
  //   ref: 'Persona',
  //   required: true,
  //   index: true,
  // })
  // persona: Persona;

@Prop({ type: Types.ObjectId, ref: 'Historia_Clinica' })
historiaClinica: Historia_Clinica;
  
  

  @Prop({ type: Types.ObjectId, ref: Componentes.name })
  componente: Componentes; //Nomenclador

  @Prop()
  responsableInscripcion: string;
  @Prop()
  responsablePrechequeo: string;
  @Prop()
  responsableSeleccion: string;
  @Prop()
  responsableExtraccion: string;
  @Prop()
  responsableCalidad: string;
  @Prop()
  responsableProduccion: string;
  @Prop()
  responsableLaboratorio: string;

  
   @Prop()
  fechaR: Date;

  @Prop()
  nombre_unidad: string;



  //DONACION
  @Prop()
  no_tubuladura?: string;

  @Prop()
  no_lote?: string;

  @Prop()
  estado?: string;


  @Prop({ type: Types.ObjectId, ref: Reacciones.name})
  reaccion?: Types.ObjectId; //Nomenclador
  
  
  @Prop({type:Date})
  fechaD?: Date;

  @Prop({ default: false })
  es_desecho?: boolean;

  @Prop()
  numero_consecutivo?: number;

  //Donacion de Sangre
  @Prop()
  tipo_bolsa?: string;

  @Prop()
  volumen?: number;

  //Donacion de Plasma
  @Prop()
  TCM?: number;

  @Prop()
  TP?: number;

  @Prop()
  tiempo?: number; //en segundos

  @Prop()
  ciclos?: number;

  @Prop()
  ACD?: number;

  @Prop()
  no_lote_kitACD?: string;

  @Prop()
  no_lote_kitBach?: string;

  //Laboratorio

  @Prop()
  resultado_VIH?: string[];

  @Prop({ type: [String] })
 resultado_rh?: string[];

  @Prop()
  resultado_hepatitisB?: string[];

  @Prop()
  resultado_hepatitisC?: string[];

 @Prop()
  resultado_tipage?: string[];

  @Prop()
  resultado_contratipaje?: string[];

  @Prop()
  resultado_DU?: string[];

  @Prop()
  resultado_serologia?: string[];

  @Prop()
  resultado_eritro?: number[];

  @Prop()
  resultado_hematocrito?: number[];

  @Prop()
  resultado_proteinas_totales?: number[];

  @Prop()
  resultado_TGP?: number[];

  @Prop()
  resultado_hemoglobina?: number[];

  @Prop()
  fechaLab?: Date;


 //SELECCION Y PRECHEQUEO
  @Prop()
  examenP_grupo?: string;

  @Prop()
  examenP_factor?: string;

  @Prop()
  examenP_hemoglobina?: number; //Min Max

  @Prop()
  examenF_peso?: number; //Min=50lb Max=400lb

  @Prop()
  examenF_pulso?: number; // Min=60 Max=100

  @Prop()
  examenF_temSublingual?: number; //  Min=36.5 Max=37.5

  @Prop()
  examenF_temAxilar?: number; // Min=36 Max=37

  @Prop()
  examenF_hemoglobina?: number; // Min=12 Max=17

  @Prop()
  apto_prechequeo?: boolean;

  @Prop()
  apto_examenFisico?: boolean;

  @Prop()
  respuestas_interrogatorio?: [
    {
      respuesta?: boolean;
      respuesta_escrita?: string;
    },
  ];

  @Prop()
  apto_interrogatorio?: boolean;

  @Prop()
  observacion_interrogatorio?: string;


@Prop()
motivo_desecho?: string;
}


export const RegistroDonacionSchema =
  SchemaFactory.createForClass(RegistroDonacion);
