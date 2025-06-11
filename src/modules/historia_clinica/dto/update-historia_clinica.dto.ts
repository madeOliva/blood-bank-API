import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoriaClinicaDto } from './create-historia_clinica.dto';
import { IsBoolean, IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ObjectId } from 'mongoose';
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

  @IsString()
  @IsNotEmpty()
  sexo: ObjectId;

  @IsNumber()
  @IsNotEmpty()
  edad: number;

  @IsString()
  @IsNotEmpty()
  estado_civil: string;

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
  no_hc: string;

  @IsString()
  @IsNotEmpty()
  grupo_sanguine: ObjectId; //Nomenclador

  @IsString()
  @IsNotEmpty()
  factor: ObjectId;

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
