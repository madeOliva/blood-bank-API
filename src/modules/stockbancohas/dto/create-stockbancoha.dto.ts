import { IsString, IsNotEmpty, IsDate, IsNumber } from "class-validator";
export class CreateStockbancohaDto {
    @IsString()
    @IsNotEmpty()
    codigo_bolsa: string;

    @IsString()
    @IsNotEmpty()
    tipo_paciente: string;

    @IsString()
    @IsNotEmpty()
    tipo_componente: string;

    @IsString()
    @IsNotEmpty()
    tipo_componente_habitual: string;

    @IsDate()
    @IsNotEmpty()
    fecha_extraccion: Date;

    @IsDate()
    @IsNotEmpty()
    fecha_vencimiento: Date;

    @IsString()
    @IsNotEmpty()
    grupo: string;

    @IsString()
    @IsNotEmpty()
    factor: string;

    @IsNumber()
    @IsNotEmpty()
    volumen_inicial: number;

    @IsNumber()
    @IsNotEmpty()
    volumen_final: number;

    @IsString()
    @IsNotEmpty()
    estado: string;
}
