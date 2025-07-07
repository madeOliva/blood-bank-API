import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type stockdelbancodelhasDocument = HydratedDocument<stockdelbancodelhas>;

@Schema()
export class stockdelbancodelhas {
    @Prop({ required: true, unique: true, index: true })
    codigo_bolsa: string;

    @Prop({ required: true })
    tipo_paciente: string;

    @Prop({ required: true })
    tipo_componente: string;

    @Prop({ })
    tipo_componente_habitual: string;

    @Prop({ type: Date, required: true })
    fecha_extraccion: Date;

    @Prop({ type: Date, required: true })
    fecha_vencimiento: Date;

    @Prop({ required: true })
    grupo: string;

    @Prop({ required: true })
    factor: string;

    @Prop({ required: true })
    volumen_inicial: number;

    @Prop({ required: true })
    volumen_final: number;
}

export const stockdelbancodelhasSchema = SchemaFactory.createForClass(stockdelbancodelhas);
