
import{IsString, IsBoolean, IsNumber, IsDate, IsEmpty, IsNotEmpty, Min, Length} from 'class-validator';



export class CreateSalaDto {

    @IsString()
    @IsNotEmpty()
    nombre_sala: string;

}


