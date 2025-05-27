import { PartialType } from '@nestjs/mapped-types';
import { CreateProvinciaDto } from './create-provincia.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProvinciaDto extends PartialType(CreateProvinciaDto) {

    @IsString()
    @IsNotEmpty()
    id_provincia:string;

    @IsString()
    @IsNotEmpty()
    nombre_provincia:string;
}
