import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProvinciaDto {
  @IsString()
  @IsNotEmpty()
  codigo_provincia: string;

  @IsString()
  @IsNotEmpty()
  nombre_provincia: string;
}
