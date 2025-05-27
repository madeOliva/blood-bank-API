import { IsString, IsNumber, IsDate, IsNotEmpty} from 'class-validator';

export class CreateCentrifugacionDto  {

  @IsString()
  @IsNotEmpty()
  no_tubuladura: string;

  @IsString()
  @IsNotEmpty()
  componente_a_obtener: string;

  @IsNumber()
  @IsNotEmpty()
  no_centrifuga: number;

  @IsNumber()
  @IsNotEmpty()
  temperatura: number;

  @IsNumber()
  @IsNotEmpty()
  velocidad: number;

  @IsDate()
  @IsNotEmpty()
  fecha: Date;
}