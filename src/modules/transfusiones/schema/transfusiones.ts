import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from 'mongoose'

export type TransfusionesDocument = HydratedDocument<Transfusiones>;

@Schema()
export class Transfusiones {
    @Prop({ required: true, unique: true })
    id_orden: string;

    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    primerApellido: string;

    @Prop({ required: true })
    segundoApellido: string;

    @Prop({ required: true })
    cama: number;

    @Prop({ required: true })
    sala: string;

    @Prop({ required: true })
    sexo: string;

    @Prop({ required: true })
    edad: string;

    @Prop({ required: true })
    fecha_orden: Date;

    @Prop({ required: true })
    hora_orden: Date;

    @Prop({ required: true })
    tipo_paciente: string;

    @Prop({ required: true })
    diagnostico_principal: string;

    @Prop({ required: true })
    grupo: string;

    @Prop({ required: true })
    factor: string;

    @Prop({ required: true })
    observacion_error: string;

    @Prop({ required: true })
    hb: number;

    @Prop({ required: true })
    hto: number;

    @Prop({ required: true })
    irn: number;

    @Prop({ required: true })
    cont_plaqueta: number;

    @Prop({ required: true })
    globulo_rojo: boolean;

    @Prop({ required: true })
    prioridad_gr: number;

    @Prop({ required: true })
    componentes: string;

    @Prop({ required: true })
    urgencia_gr: boolean;

    @Prop({ required: true })
    cant_gr: number;

    @Prop({ required: true })
    reserva_gr: boolean;

    @Prop({ required: true })
    fecha_gr: Date;

    @Prop({ required: true })
    hora_gr: Date;

    @Prop({ required: true })
    comp_plasmtico: boolean;

    @Prop({ required: true })
    prioridad_cp: number;

    @Prop({ required: true })
    urgencia_cp: boolean;

    @Prop({ required: true })
    cant_cp: number;

    @Prop({ required: true })
    frecuencia_cp: number;

    @Prop({ required: true })
    reserva_cp: boolean;

    @Prop({ required: true })
    fecha_cp: Date;

    @Prop({ required: true })
    fecha_transf: Date;

    @Prop({ required: true })
    hora_transf: Date;

    @Prop({ required: true })
    caracter: boolean;

    @Prop({ required: true })
    lugar_transf: string;

}

export const TransfusionesSchema = SchemaFactory.createForClass(Transfusiones);
