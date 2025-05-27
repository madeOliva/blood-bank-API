import{Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type PruebasposttransfusionalesDocument = HydratedDocument<Pruebasposttransfusionales>;

@Schema()
export class Pruebasposttransfusionales{
    @Prop({required: true,unique: true})
    codigo_bolsa: string;
    
    @Prop({required: true})
    pruebapostgrupo:string;
    
    @Prop({required: true})
    pruebapostfactor:string;

    @Prop({required: true})
    pruebaposthemolisis:string;

    @Prop({required: true})
    pruebapostcruzadamayor:string;

    @Prop({required: true})
    pruebapostcruzadamenor:string;
}

export const PruebasposttransfusionalesSchema = SchemaFactory.createForClass(Pruebasposttransfusionales);
