import { PartialType } from '@nestjs/mapped-types';
import { CreatePreguntaDto } from './create-pregunta.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePreguntaDto extends PartialType(

    CreatePreguntaDto,
) {

    @IsString()
    @IsNotEmpty()
    pregunta: string;

}
