import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { ObjectId, Types } from 'mongoose';

export class CreateRegistroDonacionesDto {
  @IsString()
  @IsNotEmpty()
  @Length(11, 11)
  ci: string;

  @IsString()
  @IsNotEmpty()
  componente: ObjectId; //Nomenclador

  @IsString()
  @IsNotEmpty()
  ocupacion: string;

  @IsString()
  @IsNotEmpty()
  telefono: string;

  @IsString()
  @IsNotEmpty()
  telefonoLaboral: string;

  @IsString()
  @IsNotEmpty()
  centro_laboral: string;

  @IsString()
  @IsOptional()
  otra_localizacion: string;

  @IsString()
  @IsOptional()
  examenP_grupo: string;

  @IsString()
  @IsOptional()
  examenP_factor: string;

  @IsNumber()
  @IsOptional()
  @Min(12)
  @Max(17)
  examenP_hemoglobina: number; //Min=12 Max=17

  @IsBoolean()
  @IsOptional()
  apto_prechequeo: boolean;

  @IsNumber()
  @IsOptional()
  @Min(50)
  @Max(400)
  examenF_peso: number; //Min=50lb Max=400lb

  @IsNumber()
  @IsOptional()
  @Min(40)
  @Max(180)
  examenF_pulso: number; // Min=40 Max=180

  @IsNumber()
  @IsOptional()
  @Min(35)
  @Max(40)
  examenF_temSublingual: number; //  Min=35 Max=40

  @IsNumber()
  @IsOptional()
  @Min(35)
  @Max(40)
  examenF_temAxilar: number; // Min=35 Max=40

  @IsNumber()
  @IsOptional()
  @Min(12)
  @Max(17)
  examenF_hemoglobina: number; // Min=12 Max=17

  @IsBoolean()
  @IsOptional()
  apto_examenFisico: boolean;

  @IsArray()
  @IsOptional()
  respuestas_interrogatorio: [
    {
      pregunta: number; //Relacionarlo con el nomenclador pregunta de made
      respuesta?: boolean;
      respuesta_escrita?: string;
    },
  ];

  @IsBoolean()
  @IsOptional()
  apto_interrogatorio: boolean;

  @IsString()
  @IsOptional()
  observacion_interrogatorio: string;

  @IsString()
  no_tubuladura: string;

  @IsString()
  no_lote: string;

  @IsString()
  estado: Types.ObjectId; //Nomenclador

  @IsString()
  reaccion: Types.ObjectId; //Nomenclador

  @IsBoolean()
  es_desecho: boolean;

  //Donacion de Sangre
  @IsString()
  tipo_bolsa: string; //Se puede poner como un nomenclador tambien

  @IsNumber()
  volumen: number;

  //Donacion de Plasma
  @IsNumber()
  TCM: number;

  @IsNumber()
  TP: number;

  @IsNumber()
  tiempo: number; //en segundos

  @IsNumber()
  ciclos: number;

  @IsString()
  ACD: string;

  @IsString()
  no_lote_kitACD: string;

  @IsString()
  no_lote_kitBach: string;

  //Laboratorio
  resultado_VIH: boolean[];

  resultado_hepatitisB: boolean[];

  resultado_hepatitisC: boolean[];

  confirmatoria_hepatitisB: boolean[];

  resultado_tipage: string[];

  resultado_contratipaje: string[];

  resultado_DU: boolean[];

  resultado_serologia: boolean[];

  resultado_eritro: number[];

  resultado_hematocrito: number[];

  resultado_proteinas_totales: number[];

  resultado_TGP: number[];

  resultado_hemoglobina: number[];
}
