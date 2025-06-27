import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type procesodetransfusionDocument = HydratedDocument<procesodetransfusion>;

@Schema()
export class procesodetransfusion {
    @Prop({ required: true })
    ci: string;

    @Prop({ required: true })
    no_orden: string;

    @Prop({ required: true })
    confirmacion_paciente: string;

    @Prop({ required: true })
    consentimiento_paciente: string;

    @Prop({ required: true })
    resultado_lab_grupo: string;

    @Prop({ required: true })
    resultado_lab_factor: string;

    @Prop({ required: true })
    tipo_componente_transfundido: string;

    @Prop({})
    tipo_componenteHabitual_transfundido: string;

    @Prop({ type: Date, required: true })
    fecha_hora_transfusion: Date;
}

export const procesodetransfusionSchema = SchemaFactory.createForClass(procesodetransfusion);