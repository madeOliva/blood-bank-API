import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Componentes } from 'src/modules/componentes/schemas/componentes.schemas';
import { Historia_Clinica } from 'src/modules/historia_clinica/schema/historia_clinica.schema';
import { Persona } from 'src/modules/persona/schema/persona.schema';

@Schema()
export class RegistroDonacion {
  @Prop({ unique: true })
  no_registro: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'Persona',
    required: true,
    index: true
  })
  persona: Persona;

  @Prop({
    type: Types.ObjectId,
    ref: 'Historia_Clinica',
    required: true,
    index: true
  })
  historiaClinica: Historia_Clinica;

  @Prop({ type: Types.ObjectId, ref: Componentes.name })
  componente: Componentes; //Nomenclador 

  @Prop()
  nombre_tecnico: string;

  @Prop()
  fecha_inscripcion: Date;

  @Prop()
  nombre_unidad: string;

  @Prop({ required: true })
  porParte_de: string;

  @Prop()
  examenP_grupo?: string;

  @Prop()
  examenP_factor?: string;

  @Prop()
  examenP_hemoglobina?: number; //Min Max

  @Prop()
  apto_prechequeo?: boolean;

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
  apto_examenFisico?: boolean;

  @Prop()
  respuestas_interrogatorio?: [{
    respuesta?: boolean,
    respuesta_escrita?: string
  }];

  @Prop()
  apto_interrogatorio?: boolean;

  @Prop()
  observacion_interrogatorio?: string;


}

export const RegistroDonacionSchema =
  SchemaFactory.createForClass(RegistroDonacion);
