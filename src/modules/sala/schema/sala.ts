import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from 'mongoose'



export type SalaDocument = HydratedDocument<Sala>;

@Schema()
export class Sala {
    @Prop({required:true, unique: true})
    nombre_sala: string;


}

export const SalaSchema = SchemaFactory.createForClass(Sala);

