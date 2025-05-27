import{Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type PruebaspretransfusionalesDocument = HydratedDocument<Pruebaspretransfusionales>;

@Schema()
export class Pruebaspretransfusionales{
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

export const PruebaspretransfusionalesSchema = SchemaFactory.createForClass(Pruebaspretransfusionales);
