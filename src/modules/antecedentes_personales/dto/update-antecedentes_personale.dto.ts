import { PartialType } from '@nestjs/mapped-types';
import { CreateAntecedentesPersonaleDto } from './create-antecedentes_personale.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateAntecedentesPersonaleDto extends PartialType(CreateAntecedentesPersonaleDto) {

    @IsString()
    @IsNotEmpty()
    id_antecedente: string;

    @IsString()
    @IsNotEmpty()
    nombre_antecedente: string;

    @IsNumber()
    @IsNotEmpty()
    año: string;

}
