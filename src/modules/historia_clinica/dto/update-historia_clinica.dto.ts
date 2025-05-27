import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoriaClinicaDto } from './create-historia_clinica.dto';
import { IsBoolean, IsString, IsNotEmpty } from 'class-validator';
export class UpdateHistoriaClinicaDto extends PartialType(
  CreateHistoriaClinicaDto,
) {
  @IsString()
  @IsNotEmpty()
  ci: string;

  @IsString()
  @IsNotEmpty()
  color_piel: string;

  @IsString()
  @IsNotEmpty()
  no_hc: string;

  @IsString()
  @IsNotEmpty()
  grupo_sanguine: string;

  @IsString()
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

  @IsString()
  @IsNotEmpty()
  alergias: string;

  @IsString()
  @IsNotEmpty()
  antecedentesPersonales: string[];
}
