import { IsString, IsNotEmpty, IsDate, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateComponentesatransfundirDto {
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
    @Type(() => Date)
    fecha_extraccion: Date;

    @IsDate()
    @Type(() => Date)
    fecha_vencimiento: Date;

    @IsString()
    @IsNotEmpty()
    grupo: string;

    @IsString()
    @IsNotEmpty()
    factor: string;

    @IsNumber()
    volumen_inicial: number;

    @IsNumber()
    volumen_final: number;

}
