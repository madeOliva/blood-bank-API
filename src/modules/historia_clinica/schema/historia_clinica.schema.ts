import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ColorPiel } from 'src/modules/color_piel/schema/color_piel.schema';
import { Factores } from 'src/modules/factores/schemas/factore.schema';
import { GruposSanguineos } from 'src/modules/grupos_sanguineos/schema/grupos_sanguineo.schema';
import { Provincia } from 'src/modules/provincia/schema/provincia.schema';
import { Sexo } from 'src/modules/sexo/schema/sexo.schema';

export type Historia_ClinicaDocument = HydratedDocument<Historia_Clinica>;

@Schema()
export class Historia_Clinica {
  @Prop({ required: true, unique: true })
  ci: string;

  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  primer_apellido: string;

  @Prop({ required: true })
  segundo_apellido: string;

  @Prop({ type: Types.ObjectId, ref: Sexo.name })
  sexo: Sexo; //Nomenclador

  @Prop({ required: true })
  edad: number;

  @Prop()
  estado_civil: string;

  @Prop({ required: true })
  municipio: string;

  @Prop({ type: Types.ObjectId, ref: Provincia.name })
  provincia: Provincia; //Nomenclador

  @Prop({ type: Types.ObjectId, ref: ColorPiel.name })
  color_piel: ColorPiel; //Nomenclador

  @Prop({ required: true })
  no_hc: string;

  @Prop({ type: Types.ObjectId, ref: GruposSanguineos.name })
  grupo_sanguine: GruposSanguineos; //Nomenclador

  @Prop({ type: Types.ObjectId, ref: Factores.name })
  factor: Factores; //Nomenclador

  @Prop({ required: true })
  consejo_popular: string;

  @Prop({ required: true })
  no_consultorio: string;

  @Prop({ required: true })
  telefono: string;

  @Prop({ required: true })
  telefonoLaboral: string;

  @Prop({ required: true })
  centro_laboral: string;

  @Prop()
  otra_localizacion: string;

  @Prop()
  cat_ocupacional: string;

  @Prop()
  estilo_vida: string;

  @Prop()
  alimentacion: string;

  @Prop()
  genero_vida: string;

  @Prop()
  es_donanteControlado: boolean;

  @Prop()
  es_posibleDonante: boolean;

  @Prop()
  alergias: string[]; // Array de strings

  @Prop()
  antecedentesPersonales: string[]; // Array de strings
}

export const Historia_ClinicaSchema =
  SchemaFactory.createForClass(Historia_Clinica);