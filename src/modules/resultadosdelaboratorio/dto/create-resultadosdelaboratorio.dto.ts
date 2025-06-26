import { IsString, IsNotEmpty, IsDate, IsNumber } from "class-validator";
export class CreateResultadosdelaboratorioDto {
    @IsString()
    @IsNotEmpty()
    id_orden: string;
    @IsString()
    @IsNotEmpty()
    ci: string;
    @IsString()
    @IsNotEmpty()
    resultado_laboratorio_grupo: string;
    @IsString()
    @IsNotEmpty()
    resultado_laboratorio_factor: string;
}
