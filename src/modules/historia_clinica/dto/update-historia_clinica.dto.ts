import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoriaClinicaDto } from './create-historia_clinica.dto';
import {
  IsBoolean,
  IsString,
  IsNotEmpty,
  IsNumber,
  IsArray,
  IsOptional,
  ValidateNested,
  IsMongoId,
} from 'class-validator';
import { Type } from 'class-transformer';


export class UpdateHistoriaClinicaDto extends PartialType(
  CreateHistoriaClinicaDto,
) {
  @IsString()
  @IsNotEmpty()
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

  @IsMongoId()
  @IsNotEmpty()
  sexo: string;

  @IsNumber()
  @IsNotEmpty()
  edad: number;

  @IsString()
  @IsNotEmpty()
  estado_civil: string;

  @IsString()
  @IsNotEmpty()
  municipio: string;

  @IsMongoId()
  @IsNotEmpty()
  provincia: string;

  @IsMongoId()
  @IsNotEmpty()
  color_piel: string;

  @IsString()
  @IsNotEmpty()
  no_hc: string;

  @IsMongoId()
  @IsNotEmpty()
  grupo_sanguine: string; //Nomenclador

  @IsMongoId()
  @IsNotEmpty()
  factor: string;

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
  centro_laboral: string;

  @IsString()
  @IsNotEmpty()
  otra_localizacion: string;

  @IsString()
  @IsNotEmpty()
  cat_ocupacional: string;

  @IsString()
  @IsNotEmpty()
  estilo_vida: string;

  @IsString()
  @IsNotEmpty()
  alimentacion: string;

  @IsString()
  @IsNotEmpty()
  genero_vida: string;

  @IsBoolean()
  @IsNotEmpty()
  es_donanteControlado: boolean;

  @IsBoolean()
  @IsNotEmpty()
  es_posibleDonante: boolean;

  @IsBoolean()
  @IsNotEmpty()
  es_donanteActivo: boolean;

  @IsBoolean()
  @IsOptional() 
  citado?: boolean;

  @IsOptional()
  fechaCita?: Date;

  @IsArray()
  @IsOptional()
  antecedentesPersonales?: [{ antecedente: string; año: string },];;

  @IsArray()
  @IsOptional()
  antecedentesFamiliares?: [{ antecedente: string; parentesco: string },];


  @IsArray()
  @IsOptional()
  alergias?: string[];
}