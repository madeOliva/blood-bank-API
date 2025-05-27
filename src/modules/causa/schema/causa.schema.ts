import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from 'mongoose'
import { LargeNumberLike } from "node:crypto";


export type CausaDocument = HydratedDocument<Causa>;

@Schema()
export class Causa {
    @Prop({required:true, unique: true })
    id_causa: string;

    @Prop({ required: true})
    nombre_causa: string;
}

export const CausaSchema = SchemaFactory.createForClass(Causa);