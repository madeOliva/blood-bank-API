import { PartialType } from '@nestjs/mapped-types';
import { CreateComponenteDto } from './create-componente.dto';
import { IsNotEmpty, IsString } from 'class-validator';


export class UpdateComponenteDto extends PartialType(CreateComponenteDto) {

    @IsString()
    @IsNotEmpty()
    id_componente: string;
  
    @IsString()
    @IsNotEmpty()
    nombre_componente: string;
}




 