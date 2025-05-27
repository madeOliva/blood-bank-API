import { PartialType } from '@nestjs/mapped-types';
import { CreateCalidadDto } from './create-calidad.dto';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Length,
  IsDate,
} from 'class-validator';
export class UpdateCalidadDto extends PartialType(
  CreateCalidadDto,
) {
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
  accion: string;
}
