import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from 'mongoose'
import { LargeNumberLike } from "node:crypto";

export type CentrifugacionDocument = HydratedDocument<Centrifugacion>;

@Schema()
export class Centrifugacion {
    @Prop({required:true, unique: true })
    no_tubuladura: string;

    @Prop({ required: true})
    componente_a_obtener: string;

    @Prop({ required: true })
    no_centrifuga: number;

    @Prop({ required: true })
    temperatura: number;

    @Prop({ required: true })
    velocidad: number;

    @Prop({ required: true })
    fecha: Date;
}

export const CentrifugacionSchema = SchemaFactory.createForClass(Centrifugacion);
