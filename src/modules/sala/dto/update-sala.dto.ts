import { PartialType } from '@nestjs/mapped-types';
import { CreateSalaDto } from './create-sala.dto';
import{IsString, IsBoolean, IsNumber, IsDate, IsEmpty, IsNotEmpty, Min, Length} from 'class-validator';

export class UpdateSalaDto extends PartialType(CreateSalaDto,

) {

    @IsString()
    @IsNotEmpty()
    nombre_sala: string;



}
