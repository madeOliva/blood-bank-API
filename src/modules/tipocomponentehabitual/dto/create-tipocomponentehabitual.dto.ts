import { IsNotEmpty, IsString } from "class-validator";

export class CreateTipocomponentehabitualDto {
    @IsString()
    @IsNotEmpty()
    tipocomponentehabitual: string;
}
