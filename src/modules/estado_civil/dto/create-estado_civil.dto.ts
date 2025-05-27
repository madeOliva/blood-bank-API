import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEstadoCivilDto {
    @IsString()
    @IsNotEmpty()
    id: string;
    
    @IsString()
    @IsNotEmpty()
    nombre: string;
}
