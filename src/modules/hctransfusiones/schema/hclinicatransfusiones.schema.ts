import{Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type HclinicatransfusionesDocument = HydratedDocument<Hclinicatransfusiones>;

@Schema()
export class Hclinicatransfusiones{
    @Prop({required: true})
    estado_transfusion: string;
    
    @Prop({required: true})
    motivo_estado:string;
    
    @Prop({required: true})
    consentimiento_paciente:string;

    @Prop({required: true})
    confirmacion_paciente:string;

    @Prop({required: true})
    resultadolabgrupo:string;

    @Prop({required: true})
    resultadolabfactor:string;
}

export const hclinicatransfusionesSchema = SchemaFactory.createForClass(Hclinicatransfusiones);
