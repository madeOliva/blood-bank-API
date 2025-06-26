import { IsString, IsBoolean, IsNumber, IsDate, IsEmpty, IsNotEmpty, Min, Length } from 'class-validator';

export class CreateTransfusionesDto {
    @IsString()
    @IsNotEmpty()
    id_orden: string;
    @IsString()
    @IsNotEmpty()
    ci: string;
    @IsString()
    @IsNotEmpty()
    nombre: string;
    @IsString()
    @IsNotEmpty()
    primerApellido: string;
    @IsString()
    @IsNotEmpty()
    segundoApellido: string;
    @IsNumber()
    @IsNotEmpty()
    peso: number;
    @IsNumber()
    @IsNotEmpty()
    talla: number;
    @IsNumber()
    @IsNotEmpty()
    cama: number;
    @IsString()
    @IsNotEmpty()
    sala: string;
    @IsString()
    @IsDate()
    fecha_orden: Date;
    @IsString()
    @IsDate()
    hora_orden: Date
    @IsNumber()
    @IsNotEmpty()
    tipo_paciente: string;
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
    urgencia_gr: boolean;
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
    urgencia_cp: boolean;
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
    @IsString()
    @IsDate()
    fecha_transf: Date;
    @IsString()
    @IsDate()
    hora_transf: Date;
    @IsBoolean()
    @IsNotEmpty()
    caracter: boolean;
    @IsBoolean()
    @IsNotEmpty()
    lugar_transf: string;
}


