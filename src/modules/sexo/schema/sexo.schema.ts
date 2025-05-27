import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { type } from "os";

export type SexoDocument= HydratedDocument<Sexo>;

@Schema()
export class Sexo {
    @Prop({required:true, unique:true})
    id: string;

    @Prop({required:true})
    nombre: string;

}

export const SexoSchema = SchemaFactory.createForClass(Sexo);