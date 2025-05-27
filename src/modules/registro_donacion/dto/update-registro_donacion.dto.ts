import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

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
  respuestas_interrogatorio: [{
    pregunta:number,//Relacionarlo con el nomenclador pregunta de made
    respuesta?:boolean,
    respuesta_escrita?:string
  }];

  @IsBoolean()
  @IsOptional()
  apto_interrogatorio: boolean;

  @IsString()
  @IsOptional()
  observacion_interrogatorio: string;
}
