import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateColorPielDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
