import{Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type pruebaspretransfusionalesgrDocument = HydratedDocument<pruebaspretransfusionalesgr>;

@Schema()
export class pruebaspretransfusionalesgr{
    @Prop({required: true,unique: true})
    codigo_bolsa: string;
    
    @Prop({required: true})
    pruebaregrupo:string;
    
    @Prop({required: true})
    pruebaprefactor:string;

    @Prop({required: true})
    pruebaprehemolisis:string;

    @Prop({required: true})
    pruebaprecruzadamayor:string;

    @Prop({required: true})
    pruebaprecruzadamenor:string;
}

export const pruebaspretransfusionalesgrSchema = SchemaFactory.createForClass(pruebaspretransfusionalesgr);