import { IsNotEmpty, IsString } from "class-validator";

export class CreateEstanciaExtranjeroDto {

    @IsString()
    @IsNotEmpty()
    ci: string;

    @IsString()
    @IsNotEmpty()
    pais:string;

    @IsNotEmpty()
    estadia : Date;

    @IsString()
    @IsNotEmpty()
    motivo: string;
}
