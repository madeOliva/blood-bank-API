import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';



export type ProvinciaDocument = HydratedDocument<Pais>;

@Schema()
export class Pais {
    @Prop({ required:true, unique:true })
    id_pais: string;

    @Prop({ required:true})
    nombre_pais:string;
}

export const PaisSchema = SchemaFactory.createForClass(Pais);