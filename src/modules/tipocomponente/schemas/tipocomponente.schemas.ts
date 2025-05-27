import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type tipocomponenteDocument = HydratedDocument<tipocomponente>;

@Schema()
export class tipocomponente {
    @Prop({ required: true, unique: true })
    tipocomponente: string;
}

export const tipocomponenteSchema = SchemaFactory.createForClass(tipocomponente);