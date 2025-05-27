import { PartialType } from '@nestjs/mapped-types';
import { CreateCausaDto } from './create-causa.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCausaDto extends PartialType(CreateCausaDto) {

    @IsString()
    @IsNotEmpty()
    id_causa: string;
  
    @IsString()
    @IsNotEmpty()
    nombre_causa: string;
}




