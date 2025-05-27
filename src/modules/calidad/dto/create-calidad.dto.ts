import {
  IsString,
  IsBoolean,
  IsNumber,
  IsDate,
  IsEmpty,
  IsNotEmpty,
  Min,
  Length,
} from 'class-validator';

export class CreateCalidadDto {
  @IsString()
  @IsNotEmpty()
  no_tubuladura: string;
  @IsString()
  @IsDate()
  fecha_entrega: Date;
  @IsString()
  @IsDate()
  fecha_recibido: Date;
  @IsString()
  @IsNotEmpty()
  estado: string;
  
}
