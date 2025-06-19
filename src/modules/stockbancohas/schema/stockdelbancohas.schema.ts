import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument ,Types} from "mongoose";

export type stockdelbancohasDocument = HydratedDocument<stockdelbancohas>;

@Schema()
export class stockdelbancohas {
    @Prop({ required: true, unique: true })
    codigo_bolsa: string;

    @Prop({ required: true, unique: true })
    tipo_paciente: string;

    @Prop({ required: true, unique: true })
    tipo_componente: string;

    @Prop({ required: true, unique: true })
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

    @Prop({ required: true })
    estado: string;
}

export const stockdelbancohasSchema = SchemaFactory.createForClass(stockdelbancohas);
