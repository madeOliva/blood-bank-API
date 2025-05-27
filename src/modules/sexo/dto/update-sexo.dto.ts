import { PartialType } from '@nestjs/mapped-types';
import { CreateSexoDto } from './create-sexo.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateSexoDto extends PartialType(CreateSexoDto) {
@IsString()
@IsNotEmpty()
id: string;

@IsString()
@IsNotEmpty()
nombre: string;
}
