import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from 'mongoose';
import { LargeNumberLike } from "node:crypto";
import { Historia_Clinica } from "src/modules/historia_clinica/schema/historia_clinica.schema";


export type AntecedentesPersonalesDocument = HydratedDocument<AntecedentesPersonales>;

@Schema()
export class AntecedentesPersonales{

    @Prop({ type: Types.ObjectId, ref:Historia_Clinica.name, required:true, unique: true})
    ci: string;

    @Prop({required:true, unique:true })
    id_antecedente:string;

    @Prop({required:true})
    nombre_antecedente:string;

    @Prop({required:true})
    año: number;
}

export const AntecedentesPersonalesSchema = SchemaFactory.createForClass(AntecedentesPersonales);
