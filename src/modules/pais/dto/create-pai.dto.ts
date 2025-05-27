import { IsString, IsNotEmpty} from 'class-validator';

export class CreatePaiDto {
    @IsString()
    @IsNotEmpty()
    id_pais:string;

    @IsString()
    @IsNotEmpty()
    nombre_pais:string;
 }
