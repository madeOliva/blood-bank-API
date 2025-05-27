import { IsNotEmpty, IsString } from "class-validator";

export class CreateTipocomponenteDto {
    @IsString()
    @IsNotEmpty()
    tipocomponente: string;
}
