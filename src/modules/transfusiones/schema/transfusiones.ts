import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from 'mongoose'

export type TransfusionesDocument = HydratedDocument<Transfusiones>;

@Schema()
export class Transfusiones {
    @Prop({ required: true, unique: true })
    id_orden: string;

    @Prop({ required: true })
    ci: string;

    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    primerApellido: string;

    @Prop({ required: true })
    segundoApellido: string;

    @Prop({ required: true })
    peso: number;

    @Prop({ required: true })
    talla: number;

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

    @Prop({})
    observacion_error: string;

    @Prop({ required: true })
    hb: number;

    @Prop({ required: true })
    hto: number;

    @Prop({ required: true })
    irn: number;

    @Prop({ required: true })
    cont_plaqueta: number;

    @Prop({})
    globulo_rojo: boolean;

    @Prop({})
    prioridad_gr: number;

    @Prop({})
    componentes: string;

    @Prop({})
    urgencia_gr: boolean;

    @Prop({})
    cant_gr: number;

    @Prop({})
    reserva_gr: boolean;

    @Prop({})
    fecha_gr: Date;

    @Prop({})
    hora_gr: Date;

    @Prop({})
    comp_plasmtico: boolean;

    @Prop({})
    prioridad_cp: number;

    @Prop({})
    urgencia_cp: boolean;

    @Prop({})
    cant_cp: number;

    @Prop({})
    frecuencia_cp: number;

    @Prop({})
    reserva_cp: boolean;

    @Prop({})
    fecha_cp: Date;

    @Prop({ required: true })
    fecha_transf: Date;

    @Prop({ required: true })
    hora_transf: Date;

    @Prop({})
    caracter: boolean;

    @Prop({ required: true })
    lugar_transf: string;

}

export const TransfusionesSchema = SchemaFactory.createForClass(Transfusiones);
