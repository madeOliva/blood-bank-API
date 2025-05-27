import { IsNotEmpty, IsString } from "class-validator";

export class CreateTipocomponenteespecialDto {
    @IsString()
    @IsNotEmpty()
    tipocomponenteespecial: string;
}
