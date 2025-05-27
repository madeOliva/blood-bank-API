import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreatePlanTrabajoDto {
  @IsDate()
  @IsNotEmpty()
  fecha: Date;
  @IsString()
  @IsNotEmpty()
  areasalud: string;
  @IsString()
  @IsNotEmpty()
  consejopopular: string;
  @IsString()
  @IsNotEmpty()
  consultoriosafectados: string;
  @IsString()
  @IsNotEmpty()
  lugardonacion: string;
  @IsString()
  @IsNotEmpty()
  compromiso: string;
  @IsString()
  @IsNotEmpty()
  reaponsablesalud: string;
  @IsString()
  @IsNotEmpty()
  cdr: string;
}
