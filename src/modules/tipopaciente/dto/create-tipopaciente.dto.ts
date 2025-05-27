import { IsNotEmpty, IsString } from "class-validator";

export class CreateTipopacienteDto {
    @IsString()
    @IsNotEmpty()
    tipopaciente: string;
}
