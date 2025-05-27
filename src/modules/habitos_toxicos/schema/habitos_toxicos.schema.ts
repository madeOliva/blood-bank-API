import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Historia_Clinica } from "src/modules/historia_clinica/schema/historia_clinica.schema";



@Schema()
export class Habitos_Toxicos {
    @Prop({ type: Types.ObjectId, ref: Historia_Clinica.name, required: true, unique: true })
    ci: string;

    @Prop({ required: true })
    habito: string[];

    @Prop({ required: true })
    intensidad: string;

}

export const Habitos_ToxicosSchema = SchemaFactory.createForClass(Habitos_Toxicos);