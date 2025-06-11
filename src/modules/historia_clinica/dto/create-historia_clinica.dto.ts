import {
  IsString,
  IsBoolean,
  IsNumber,
  IsDate,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ObjectId } from 'mongoose';
export class CreateHistoriaClinicaDto {
  @IsString()
  @IsNotEmpty()
  no_hc: string;

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
  sexo: ObjectId; //Nomenclador

  @IsNumber()
  @IsNotEmpty()
  edad: number;

  @IsString()
  @IsNotEmpty()
  municipio: string;

  @IsString()
  @IsNotEmpty()
  provincia: ObjectId; //Nomenclador

  @IsString()
  @IsNotEmpty()
  color_piel: ObjectId; //Nomenclador

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
  telefonoLaboral: string;

  @IsString()
  @IsNotEmpty()
  centro_laboral: string;

  //Atributos opcionales

  @IsString()
  @IsOptional()
  otra_localizacion: string;

  @IsString()
  @IsOptional()
  estado_civil: string;

  @IsString()
  @IsOptional()
  cat_ocupacional: string;

  @IsString()
  @IsOptional()
  estilo_vida: string;

  @IsString()
  @IsOptional()
  alimentacion: string;

  @IsString()
  @IsOptional()
  genero_vida: string;

  @IsBoolean()
  @IsOptional()
  es_donanteControlado: boolean;

  @IsBoolean()
  @IsOptional()
  es_posibleDonante: boolean;

  @IsString()
  @IsOptional()
  alergias: string;

  @IsString()
  @IsOptional()
  antecedentesPersonales: string[];
}
