import { IsString, IsNotEmpty } from "class-validator";
export class CreatePruebaspretransfusionaleDto {
    @IsString()
    @IsNotEmpty()
    codigo_bolsa: string;

    @IsString()
    @IsNotEmpty()
    pruebaregrupo:string;

    @IsString()
    @IsNotEmpty()
    pruebaprefactor:string;

    @IsString()
    @IsNotEmpty()
    pruebaprehemolisis:string;

    @IsString()
    @IsNotEmpty()
    pruebaprecruzadamayor:string;

    @IsString()
    @IsNotEmpty()
    pruebaprecruzadamenor:string;
}
