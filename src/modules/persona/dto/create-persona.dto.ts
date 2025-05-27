import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePersonaDto {
@IsString()
@IsNotEmpty()
ci: string;

@IsString()
@IsNotEmpty()
nombre: string;

@IsString()
@IsNotEmpty()
primer_apellido: string;

@IsString()
@IsNotEmpty()
segundo_apellido: string;

@IsString()
@IsNotEmpty()
sexo: string;

@IsNumber()
@IsNotEmpty()
edad: number ;

@IsString()
@IsNotEmpty()
estado_civil: string;

@IsString()
@IsNotEmpty()
municipio: string;

}

