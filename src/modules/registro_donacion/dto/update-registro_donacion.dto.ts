import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { Types } from 'mongoose';

export class UpdateRegistroDonacionDto {
  @IsString()
  @IsOptional()
  no_registro: string;

  @IsString()
  @IsOptional()
  @Length(11, 11)
  ci: string;

  @IsString()
  @IsOptional()
  componente: string;

  @IsString()
  @IsOptional()
  nombre_tecnico: string;

  @IsString()
  @IsOptional()
  fecha_inscripcion: Date;

  @IsString()
  @IsOptional()
  nombre_unidad: string;

  @IsString()
  @IsOptional()
  porParte_de: string;

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
  examenP_hemoglobina: number;

  @IsBoolean()
  @IsOptional()
  apto_prechequeo: boolean;

  @IsNumber()
  @IsOptional()
  @Min(50)
  @Max(400)
  examenF_peso: number;

  @IsNumber()
  @IsOptional()
  @Min(40)
  @Max(180)
  examenF_pulso: number;

  @IsNumber()
  @IsOptional()
  @Min(35)
  @Max(40)
  examenF_temSublingual: number;

  @IsNumber()
  @IsOptional()
  @Min(35)
  @Max(40)
  examenF_temAxilar: number;

  @IsNumber()
  @IsOptional()
  @Min(12)
  @Max(17)
  examenF_hemoglobina: number;

  @IsBoolean()
  @IsOptional()
  apto_examenFisico: boolean;

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
  ci_donante: string;

  @IsString()
  estado: Types.ObjectId; //Nomenclador

  @IsString()
  reaccion: Types.ObjectId; //Nomenclador

  
  @IsString()
  nombre_tecnicoD: string;

  @IsBoolean()
  es_desecho: boolean;

  @IsNumber()
  numero_consecutivo: number;

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
