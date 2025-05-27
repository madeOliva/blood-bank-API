import { PartialType } from '@nestjs/mapped-types';
import { CreateTransfusionesDto } from './create-transfusiones.dto';
import{IsString, IsBoolean, IsNumber, IsDate, IsEmpty, IsNotEmpty, Min, Length} from 'class-validator';


export class UpdateTransfusionesDto extends PartialType(CreateTransfusionesDto,


) {
    @IsString()
    @IsNotEmpty()
    id_orden: string;
    @IsNumber()
    @IsNotEmpty()
    cama: number;
    @IsString()
    @IsNotEmpty()
    sala: string;
    @IsString()
    @IsNotEmpty()
    usuario_orden:string;
    @IsString()
    @IsDate()
    fecha_orden: Date;
    @IsString()
    @IsDate()
    hora_orden: Date
    @IsNumber()
    @IsNotEmpty()
    tipo_paciente: number;
    @IsString()
    @IsNotEmpty()
    diagnostico_principal: string;
    @IsString()
    @IsNotEmpty()
    grupo: string;
    @IsString()
    @IsNotEmpty()
    factor: string;
    @IsString()
    @IsNotEmpty()
    observacion_error: string;
    @IsString()
    @IsNotEmpty()
    observacion_transf: string;
    @IsNumber()
    @IsNotEmpty()
    hb: number;
    @IsNumber()
    @IsNotEmpty()
    hto: number;
    @IsNumber()
    @IsNotEmpty()
    irn: number;
    @IsNumber()
    @IsNotEmpty()
    cont_plaquetas: number;
    @IsBoolean()
    @IsNotEmpty()
    globulo_rojo: boolean;
    @IsNumber()
    @IsNotEmpty()
    prioridad_gr: number;
    @IsString()
    @IsNotEmpty()
    componentes: string;
    @IsBoolean()
    @IsNotEmpty()
    urgencia: boolean;
    @IsBoolean()
    @IsNotEmpty()
    fraccionado: boolean;
    @IsNumber()
    @IsNotEmpty()
    cant_gr: number;
    @IsBoolean()
    @IsNotEmpty()
    reserva_gr: boolean;
    @IsString()
    @IsDate()
    fecha_gr: Date;
    @IsBoolean()
    @IsNotEmpty()
    comp_plasmatico: boolean;
    @IsNumber()
    @IsNotEmpty()
    prioridad_cp: number;
    @IsNumber()
    @IsNotEmpty()
    cant_cp: number;
    @IsNumber()
    @IsNotEmpty()
    frecuencia_cp: number;
    @IsBoolean()
    @IsNotEmpty()
    reserva_cp: boolean;
    @IsString()
    @IsDate()
    fecha_cp: Date;
    @IsBoolean()
    @IsNotEmpty()
    comp_especiales: boolean;
    @IsString()
    @IsNotEmpty()
    motivo_ce: string;
    @IsNumber()
    @IsNotEmpty()
    prioridad_ce: number;
    @IsNumber()
    @IsNotEmpty()
    cant_ce: number;
    @IsNumber()
    @IsNotEmpty()
    frecuencia_ce: number;
    @IsString()
    @IsDate()
    fecha_transf: Date;
    @IsString()
    @IsDate()
    hora_transf: Date;
    @IsBoolean()
    @IsNotEmpty()
    lugar_transf: boolean;
    @IsString()
    @IsNotEmpty()
    evento_transf: string;
    @IsString()
    @IsNotEmpty()
    motivo_evento_transf: string;
    @IsString()
    @IsNotEmpty()
    tratamiento: string;










}
