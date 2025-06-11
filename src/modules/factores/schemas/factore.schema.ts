import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type factoresDocument= HydratedDocument<Factores>;

@Schema()
export class Factores {
   
    @Prop({required:true,  unique: true })
    signo: string;

}

export const FactoresSchema = SchemaFactory.createForClass(Factores);