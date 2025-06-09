import {
  IsString,
  IsBoolean,
  IsNumber,
  IsDate,
  IsEmpty,
  IsNotEmpty,
  Min,
  Length,
  IsOptional,
} from 'class-validator';
export class CreateHistoriaClinicaDto {
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
  telefonoLaboral: string;

  @IsString()
  @IsNotEmpty()
  centro_laboral: string;

  @IsString()
  @IsOptional()
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
