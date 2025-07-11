import { IsString, IsNumber, IsIn, IsDate, IsNotEmpty } from 'class-validator';

export class CreateCentrifugacionDto {
  @IsNotEmpty()
  @IsString()
  no_hc: string; 

  @IsString()
  no_consecutivo: string;

  @IsIn(['CEPL', 'CP', 'PFC', 'CRIO'])
  componente_a_obtener: string;

  @IsNumber()
  no_centrifuga: number;

  @IsNumber()
  temperatura: number;

  @IsNumber()
  velocidad: number;

 no_tubuladura?: string; 
}