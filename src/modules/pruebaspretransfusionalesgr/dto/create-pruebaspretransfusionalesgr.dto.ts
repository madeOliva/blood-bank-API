import { IsString, IsNotEmpty, IsDate, IsNumber } from "class-validator";
export class CreatePruebaspretransfusionalesgrDto {
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
