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
  @IsOptional() 
  ci: string;

  @IsString()
  @IsOptional() 
  nombre: string;

  @IsString()
  @IsOptional() 
  primer_apellido: string;

  @IsString()
  @IsOptional() 
  segundo_apellido: string;

  @IsMongoId()
  @IsOptional() 
  sexo: string;

  @IsNumber()
  @IsOptional() 
  edad: number;

  @IsString()
  @IsOptional() 
  estado_civil: string;

  @IsString()
  @IsOptional() 
  municipio: string;

  @IsMongoId()
  @IsOptional() 
  provincia: string;

  @IsMongoId()
  @IsOptional() 
  color_piel: string;

  @IsString()
  @IsOptional() 
  no_hc: string;

  @IsMongoId()
  @IsOptional() 
  grupo_sanguine: string; //Nomenclador

  @IsMongoId()
  @IsOptional() 
  factor: string;

  @IsString()
  @IsOptional() 
  consejo_popular: string;

  @IsString()
  @IsOptional() 
  no_consultorio: string;

  @IsString()
  @IsOptional() 
  ocupacion: string;

  @IsString()
  @IsOptional() 
  telefono: string;

  @IsString()
  @IsOptional() 
  centro_laboral: string;

  @IsString()
  @IsOptional() 
  otra_localizacion: string;

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

  @IsBoolean()
  @IsOptional() 
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
  habitosToxicos?: [
    {
      habito?: string;
      intensidad?: string;
    },
  ];

   @IsArray()
  @IsOptional()
  estanciaExtranjero?:[{fecha:Date; pais?:string; estadia?:string; motivo?:string}]

  @IsArray()
  @IsOptional()
  alergias?: string[];
}