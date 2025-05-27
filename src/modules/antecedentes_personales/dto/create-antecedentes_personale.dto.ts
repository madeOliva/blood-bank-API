import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateAntecedentesPersonaleDto {

    @IsString()
    @IsNotEmpty()
    ci: string;

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
