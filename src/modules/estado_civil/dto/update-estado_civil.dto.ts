import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadoCivilDto } from './create-estado_civil.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateEstadoCivilDto extends PartialType(CreateEstadoCivilDto) {
@IsString()
@IsNotEmpty()
id: string;

@IsString()
@IsNotEmpty()
nombre: string;
}
