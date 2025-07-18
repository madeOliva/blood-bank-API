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
  ValidateNested,
  ArrayMaxSize,
} from 'class-validator';
import { ObjectId, Types } from 'mongoose';
import { Type } from 'class-transformer';

// DTO para la historia clínica
export class HistoriaClinicaDto {
  @IsString()
  @IsNotEmpty()
  no_hc: string;

  @IsString()
  @IsNotEmpty()
  @Length(11, 11)
  ci: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  primer_apellido: string;

  @IsString()
  @IsNotEmpty()
  segundo_apellido: string;

  @IsString()
  @IsNotEmpty()
  sexo: ObjectId;

  @IsNumber()
  @IsNotEmpty()
  edad: number;

  @IsString()
  @IsNotEmpty()
  municipio: string;

  @IsString()
  @IsNotEmpty()
  provincia: ObjectId;

  @IsString()
  @IsNotEmpty()
  color_piel: ObjectId;

  @IsString()
  @IsNotEmpty()
  grupo_sanguine: ObjectId;

  @IsString()
  @IsNotEmpty()
  factor: ObjectId;

  @IsString()
  @IsNotEmpty()
  otra_localizacion: string;
}

// DTO principal de registro de donaciones
export class UpdateRegistroDonacionDto {
  @IsString()
  @IsOptional()
  responsableInscripcion: string;

  @IsString()
  @IsOptional()
  responsableExtraccion?: string;

  @ValidateNested()
  @Type(() => HistoriaClinicaDto)
  @IsNotEmpty()
  historiaClinica: HistoriaClinicaDto;

  @IsString()
  @IsNotEmpty()
  consejo_popular: string;

  @IsString()
  @IsNotEmpty()
  no_consultorio: string;

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
  @IsNotEmpty()
  componente: ObjectId; //Nomenclador

  //Examenes Prechequeo

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

  //Seleccion

  @IsArray()
  @IsOptional()
  respuestas_interrogatorio: [
    {
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

  //Donacion

  @IsString()
  @IsOptional()
  no_tubuladura: string;

  @IsString()
  @IsOptional()
  no_lote: string;

  @IsString()
  @IsOptional()
  estado: string;

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

  @IsNumber()
  @IsOptional()
  ACD: number;

  @IsString()
  @IsOptional()
  no_lote_kitACD: string;

  @IsString()
  @IsOptional()
  no_lote_kitBach: string;

  //Laboratorio
  @IsOptional()
  @ArrayMaxSize(4)
  resultado_VIH: string[];

  @IsOptional()
  @ArrayMaxSize(4)
  resultado_hepatitisB: string[];

  @IsOptional()
  @ArrayMaxSize(4)
  resultado_hepatitisC: string[];

  @IsOptional()
  @ArrayMaxSize(4)
  resultado_rh?: string[];

  @IsOptional()
  @ArrayMaxSize(4)
  resultado_tipage: string[];

  @IsOptional()
  @ArrayMaxSize(4)
  resultado_contratipaje: string[];

  @IsOptional()
  @ArrayMaxSize(4)
  resultado_DU: string[];

  @IsOptional()
  @ArrayMaxSize(4)
  resultado_serologia: string[];

  @IsOptional()
  @ArrayMaxSize(4)
  resultado_eritro: number[];

  @IsOptional()
  @ArrayMaxSize(4)
  resultado_hematocrito: number[];

  @IsOptional()
  @ArrayMaxSize(4)
  resultado_proteinas_totales: number[];

  @IsOptional()
  @ArrayMaxSize(4)
  resultado_TGP: number[];

  @IsOptional()
  @ArrayMaxSize(4)
  resultado_hemoglobina: number[];

  @IsOptional()
  @ArrayMaxSize(4)
  fecha_suma: Date[];

  @IsOptional()
  @ArrayMaxSize(4)
  fecha_inmuno: Date[];

  @IsOptional()
  @ArrayMaxSize(4)
  fecha_calidad: Date[];
}
