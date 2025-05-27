import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsDate, IsNotEmpty} from 'class-validator';
import { CreateCentrifugacionDto } from './create-centrifugacion.dto';

export class UpdateCentrifugacionDto extends PartialType(CreateCentrifugacionDto) {

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
  centrifugacion: any;
}