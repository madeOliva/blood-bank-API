import {
  IsString,
  IsBoolean,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsArray,
  ValidateNested,
  IsMongoId,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';


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

  @IsMongoId()
  @IsNotEmpty()
  sexo: string; //Nomenclador

  @IsDate()
  @IsNotEmpty()
  fecha_nacimiento: Date; //Formato: YYYY-MM-DD

  @IsNumber()
  @IsNotEmpty()
  edad: number;

  @IsString()
  @IsNotEmpty()
  municipio: string;

  @IsMongoId()
  @IsNotEmpty()
  provincia: string; //Nomenclador

  @IsMongoId()
  @IsNotEmpty()
  color_piel: string; //Nomenclador

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
  telefonoLaboral: string;

  @IsString()
  @IsNotEmpty()
  centro_laboral: string;

  @IsString()
  @IsNotEmpty()
  direccion: string;

  

  //Atributos opcionales

  @IsString()
  @IsOptional()
  otra_localizacion?: string;

  @IsString()
  @IsOptional()
  estado_civil?: string;

  @IsString()
  @IsOptional()
  cat_ocupacional?: string;

  @IsString()
  @IsOptional()
  estilo_vida?: string;

  @IsString()
  @IsOptional()
  alimentacion?: string;

  @IsString()
  @IsOptional()
  genero_vida?: string;

  @IsBoolean()
  @IsOptional()
  es_donanteControlado?: boolean;

  @IsBoolean()
  @IsOptional()
  es_posibleDonante?: boolean;

  @IsBoolean()
  @IsNotEmpty()
  es_donanteActivo: boolean;

  @IsBoolean()
  @IsOptional()
  citado?: boolean;
 
  @IsOptional()
  fechaCita?: Date;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  alergias?: string[];

  @IsArray()
  @IsOptional()
  antecedentesPersonales?: [{ antecedente: string; año: string },];;

  @IsArray()
  @IsOptional()
  antecedentesFamiliares?:  [{ antecedente: string; parentesco: string },];
}