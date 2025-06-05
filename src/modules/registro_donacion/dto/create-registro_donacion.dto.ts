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
import { ObjectId } from 'mongoose';

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
}
