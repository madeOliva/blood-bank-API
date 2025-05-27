import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from 'mongoose'

export type TransfusionesDocument = HydratedDocument<Transfusiones>;

@Schema()
export class Transfusiones {
    @Prop({required:true, unique: true})
    id_orden: string;

    @Prop({required:true})
    cama: number;

    @Prop({required:true})
   sala: string;
     
   @Prop({required:true})
    usuario_orden: string;

    @Prop({required:true})
    fecha_orden: Date;

    @Prop({required:true})
    hora_orden:Date;

    @Prop({required:true})
    tipo_paciente: number;

    @Prop({required:true})
    diagnostico_principal: string;

    
    @Prop({required:true})
    grupo: string;

    @Prop({required:true})
   factor: string;

    @Prop({required:true})
    observacion_error: string;

    @Prop({required:true})
    observacion_transf: string;

    @Prop({required:true})
    hb: number;

    @Prop({required:true})
    hto: number;

    @Prop({required:true})
    irn: number;

    @Prop({required:true})
    cont_plaqueta: number;

    @Prop({required:true})
    globulo_rojo: boolean;

    @Prop({required:true})
    prioridad_gr: number;

    @Prop({required:true})
    componentes: string;

    @Prop({required:true})
    urgencia: boolean;

    @Prop({required:true})
    fraccionado: boolean;

    @Prop({required:true})
    cant_gr: number;

    @Prop({required:true})
    reserva_gr: boolean;

    @Prop({required:true})
    fecha_gr: Date;

    @Prop({required:true})
    comp_plasmtico: boolean;

    @Prop({required:true})
    prioridad_cp: number;

    @Prop({required:true})
    cant_cp: number;

    @Prop({required:true})
    frecuencia_cp: number;

    @Prop({required:true})
    reserva_cp: boolean;

    @Prop({required:true})
    fecha_cp: Date;

    @Prop({required:true})
    comp_especiales: boolean;

    @Prop({required:true})
    motivo_ce: string;

    @Prop({required:true})
    prioridad_ce: number;

    @Prop({required:true})
    cant_ce: number;

    @Prop({required:true})
    frecuencia_ce: number;

    @Prop({required:true})
    fecha_transf: Date;

    @Prop({required:true})
    hora_transf: Date;

    @Prop({required:true})
    lugar_transf: boolean;

    @Prop({required:true})
    evento_transf: string;

    @Prop({required:true})
    motivo_evento_transf: string;

    @Prop({required:true})
    tratamiento: string;

}  

export const TransfusionesSchema = SchemaFactory.createForClass(Transfusiones);
