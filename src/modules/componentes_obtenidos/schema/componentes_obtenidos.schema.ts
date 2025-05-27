import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from 'mongoose'
import { LargeNumberLike } from "node:crypto";

export type Componentes_ObtenidosDocument = HydratedDocument<Componentes_Obtenidos>;

@Schema()
export class Componentes_Obtenidos {
    @Prop({required:true, unique: true })
    no_tubuladura: string;

    @Prop({ required: true})
    tipo_componente: string;

    @Prop({ required: true })
    volumen: number;

    @Prop({ required: true })
    fecha_obtencion: Date;

    @Prop({ required: true })
    es_desecho: boolean;

    @Prop({ required: true })
    causa: string;

    @Prop({ required: true })
    confirmado_por: string;

    @Prop({ required: true })
    estado_componente: string;
}

export const Componentes_ObtenidosSchema = SchemaFactory.createForClass(Componentes_Obtenidos);
