import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type SexoDocument= HydratedDocument<Sexo>;

@Schema()
export class Sexo {
   
    @Prop({required:true,  unique: true })
    nombre: string;

}

export const SexoSchema = SchemaFactory.createForClass(Sexo);