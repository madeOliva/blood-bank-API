import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type PreguntaDocument = HydratedDocument<Pregunta>

@Schema()
export class Pregunta {


    @Prop({ required: true, unique: true })
    pregunta: string;


}

export const PreguntaSchema = SchemaFactory.createForClass(Pregunta)
