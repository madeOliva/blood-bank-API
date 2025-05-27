import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type tipocomponenteespecialDocument = HydratedDocument<tipocomponenteespecial>;

@Schema()
export class tipocomponenteespecial {
    @Prop({ required: true, unique: true })
    tipocomponenteespecial: string;
}

export const tipocomponenteespecialSchema = SchemaFactory.createForClass(tipocomponenteespecial);