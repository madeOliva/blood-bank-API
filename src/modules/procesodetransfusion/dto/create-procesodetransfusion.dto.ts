import { IsString, IsNotEmpty } from "class-validator";
export class CreateProcesodetransfusionDto {
    @IsString()
    @IsNotEmpty()
    ci: string;
    @IsString()
    @IsNotEmpty()
    no_orden: string;
    @IsString()
    @IsNotEmpty()
    confirmacion_paciente: boolean;
    @IsString()
    @IsNotEmpty()
    consentimiento_paciente: boolean;
    @IsString()
    @IsNotEmpty()
    resultado_lab_grupo: string;
    @IsString()
    @IsNotEmpty()
    resultado_lab_factor: string;
    @IsString()
    @IsNotEmpty()
    tipo_componente_transfundido: string;
    @IsString()
    @IsNotEmpty()
    tipo_componenteHabitual_transfundido: string;
    @IsString()
    @IsNotEmpty()
    fecha_hora_transfusion: Date;
}
