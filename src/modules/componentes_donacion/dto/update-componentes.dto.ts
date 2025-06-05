import { IsNumber, IsString } from 'class-validator';

export class UpdateComponenteDto {
  @IsString()
  nombre_componente: string;

  @IsNumber()
  diasEsperaMasculino: number;

  @IsNumber()
  diasEsperaFemenino: number;

  @IsString()
  siglas: string;
}
