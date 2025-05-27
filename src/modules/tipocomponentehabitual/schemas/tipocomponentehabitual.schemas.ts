import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type tipocomponentehabitualDocument = HydratedDocument<tipocomponentehabitual>;

@Schema()
export class tipocomponentehabitual {
    @Prop({ required: true, unique: true })
    tipocomponentehabitual: string;
}

export const tipocomponentehabitualSchema = SchemaFactory.createForClass(tipocomponentehabitual);