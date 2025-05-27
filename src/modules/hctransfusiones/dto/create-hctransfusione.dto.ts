import { IsNotEmpty, IsString } from "class-validator"; 
export class CreateHctransfusioneDto {
    @IsString()
    @IsNotEmpty()
    estado_transfusion: string;
    
    @IsString() 
    @IsNotEmpty()
    motivo_estado: string;

    @IsString()
    @IsNotEmpty()
    consentimiento_paciente: string;

    @IsString() 
    @IsNotEmpty()
    confirmacion_paciente:string;

    @IsString()
    @IsNotEmpty()
    resultadolabgrupo:string;

    @IsString()
    @IsNotEmpty()
    resultadolabfactor:string;
}
