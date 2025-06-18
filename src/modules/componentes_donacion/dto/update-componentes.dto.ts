import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateComponenteDto {
  @IsOptional()
  @IsString()
  nombre_componente: string;

  @IsOptional()
  @IsNumber()
  diasEsperaMasculino: number;

  @IsOptional()
  @IsNumber()
  diasEsperaFemenino: number;

  @IsOptional()
  @IsString()
  siglas: string;
}
