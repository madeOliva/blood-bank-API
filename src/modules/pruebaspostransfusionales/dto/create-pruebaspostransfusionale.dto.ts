import { isEmpty, IsNotEmpty, IsString } from "class-validator";
export class CreatePruebaspostransfusionaleDto {
    @IsString()
    @IsNotEmpty()
    codigo_bolsa: string;

    @IsString()
    @IsNotEmpty()
    pruebapostgrupo:string;

    @IsString()
    @IsNotEmpty()
    pruebapostfactor:string;

    @IsString()
    @IsNotEmpty()
    pruebaposthemolisis:string;

    @IsString()
    @IsNotEmpty()
    pruebapostcruzadamayor:string;

    @IsString()
    @IsNotEmpty()
    pruebapostcruzadamenor:string;
}
