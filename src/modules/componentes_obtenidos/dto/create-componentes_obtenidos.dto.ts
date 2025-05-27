import { IsString, IsNumber, IsDate, IsNotEmpty, IsBoolean, Length} from 'class-validator';

export class CreateComponentesObtenidosDto  {

  @IsString()
  @IsNotEmpty()
  no_tubuladura: string;

  @IsString()
  @IsNotEmpty()
  tipo_componente: string;

  @IsNumber()
  @IsNotEmpty()
  volumen: number;

  @IsDate()
  @IsNotEmpty()
  fecha_obtencion: Date;

  @IsBoolean()
  @IsNotEmpty()
  es_desecho: boolean;

  @IsString()
  @IsNotEmpty()
  causa: string;

  @IsString()
  @IsNotEmpty()
  @Length(4, 4)
  confirmado_por: string;

  @IsString()
  @IsNotEmpty()
  estado_componente: string;
  
}
 