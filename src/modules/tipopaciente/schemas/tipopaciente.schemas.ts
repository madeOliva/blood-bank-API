import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type tipopacienteDocument = HydratedDocument<tipopaciente>;

@Schema()
export class tipopaciente {
    @Prop({ required: true, unique: true })
    tipopaciente: string;
}

export const tipopacienteSchema = SchemaFactory.createForClass(tipopaciente);