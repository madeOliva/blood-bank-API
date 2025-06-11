import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';


export type ProvinciaDocument = HydratedDocument<Provincia>;

@Schema()
export class Provincia {
    

    @Prop({ required:true})
    nombre_provincia:string;

    @Prop({ required:true })
    codigo_provincia: string;
    
}

export const ProvinciaSchema = SchemaFactory.createForClass(Provincia);
