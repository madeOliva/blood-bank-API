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
  @IsOptional()
  no_tubuladura: string;

  @IsString()
  @IsOptional()
  no_lote: string;

 
  @IsOptional()
  estado: Types.ObjectId; //Nomenclador

  @IsOptional()
  reaccion: Types.ObjectId; //Nomenclador

  @IsBoolean()
  @IsOptional()
  es_desecho: boolean;

  //Donacion de Sangre
  @IsString()
  @IsOptional()
  tipo_bolsa: string; //Se puede poner como un nomenclador tambien

  @IsNumber()
  @IsOptional()
  volumen: number;

  //Donacion de Plasma
  @IsNumber()
  @IsOptional()
  TCM: number;

  @IsNumber()
  @IsOptional()
  TP: number;

  @IsNumber()
  @IsOptional()
  tiempo: number; //en segundos

  @IsNumber()
  @IsOptional()
  ciclos: number;

  @IsString()
  @IsOptional()
  ACD: string;

  @IsString()
  @IsOptional()
  no_lote_kitACD: string;

  @IsString()
  @IsOptional()
  no_lote_kitBach: string;

  //Laboratorio
  @IsOptional()
  resultado_VIH: boolean[];

  @IsOptional()
  resultado_hepatitisB: boolean[];

  @IsOptional()
  resultado_hepatitisC: boolean[];

  @IsOptional()
  confirmatoria_hepatitisB: boolean[];

  @IsOptional()
  resultado_tipage: string[];

  @IsOptional()
  resultado_contratipaje: string[];

  @IsOptional()
  resultado_DU: boolean[];

  @IsOptional()
  resultado_serologia: boolean[];

  @IsOptional()
  resultado_eritro: number[];

  @IsOptional()
  resultado_hematocrito: number[];

  @IsOptional()
  resultado_proteinas_totales: number[];

  @IsOptional()
  resultado_TGP: number[];

  @IsOptional()
  resultado_hemoglobina: number[];
}
