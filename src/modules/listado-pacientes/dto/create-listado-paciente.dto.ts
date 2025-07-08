import { IsString, IsBoolean, IsNumber, IsDate, IsEmpty, IsNotEmpty, Min, Length } from 'class-validator';
export class CreateListadoPacienteDto {
    @IsString()
    @IsNotEmpty()
    ci: string;
    @IsString()
    @IsNotEmpty()
    no_hc: string;
    @IsString()
    @IsNotEmpty()
    nombre: string;
    @IsString()
    @IsNotEmpty()
    primerApellido: string;
    @IsString()
    @IsNotEmpty()
    segundoApellido: string;
    @IsString()
    @IsNotEmpty()
    sexo: string;
    @IsString()
    @IsNotEmpty()
    edad: number;
}
