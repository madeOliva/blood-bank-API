import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from 'mongoose'
import { LargeNumberLike } from "node:crypto";
import { Componente } from "../entities/componente.entity";

export type ComponentesDocument = HydratedDocument<Componente>;

@Schema()
export class componente {
    @Prop({required:true, unique: true })
    id_componente: string;

    @Prop({ required: true})
    nombre_componente: string;
}

export const ComponenteSchema = SchemaFactory.createForClass(Componente);
