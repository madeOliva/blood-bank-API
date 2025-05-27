import { PartialType } from '@nestjs/mapped-types';
import { CreatePaiDto } from './create-pai.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePaiDto extends PartialType(CreatePaiDto) {
    @IsString()
    @IsNotEmpty()
    id_pais:string;

    @IsString()
    @IsNotEmpty()
    nombre_pais:string;
}
