import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Historia_Clinica } from "src/modules/historia_clinica/schema/historia_clinica.schema";

@Schema()
export class Estancia_Extranjero {

    @Prop({ type: Types.ObjectId, ref: Historia_Clinica.name, required: true, unique: true })
    ci: string;

    @Prop()
    fecha: Date;

    @Prop({ required: true })
    pais:string;

    @Prop({ required: true })
    estadia : Date;

    @Prop({ required: true })
    motivo: string;
}

export const Estancia_ExtranjeroSchema = SchemaFactory.createForClass(Estancia_Extranjero);