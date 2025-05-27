import { IsString, IsNotEmpty, IsDate, IsNumber } from "class-validator";
import { tipocomponente } from "src/modules/tipocomponente/schemas/tipocomponente.schemas";
import { tipocomponenteespecial } from "src/modules/tipocomponenteespecial/schemas/tipocomponenteespecial.schemas";
import { tipocomponentehabitual } from "src/modules/tipocomponentehabitual/schemas/tipocomponentehabitual.schemas";
import { tipopaciente } from "src/modules/tipopaciente/schemas/tipopaciente.schemas";
export class CreateStockbancohaDto {
    @IsString()
    @IsNotEmpty()
    codigo_bolsa: string;

    @IsString()
    @IsNotEmpty()
    tipo_paciente: tipopaciente;

    @IsString()
    @IsNotEmpty()
    tipo_componente: tipocomponente;

    @IsString()
    @IsNotEmpty()
    tipo_componente_habitual: tipocomponentehabitual;

    @IsString()
    @IsNotEmpty()
    tipo_componente_especial: tipocomponenteespecial;

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
