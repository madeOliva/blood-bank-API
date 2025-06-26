import{Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type pruebaspretransfusionalespcpDocument = HydratedDocument<pruebaspretransfusionalespcp>;

@Schema()
export class pruebaspretransfusionalespcp{
    @Prop({required: true,unique: true})
    codigo_bolsa: string;
    
    @Prop({required: true})
    pruebaregrupo:string;
    
    @Prop({required: true})
    pruebaprefactor:string;

    @Prop({required: true})
    pruebaprecruzadamayor:string;

    @Prop({required: true})
    pruebaprecruzadamenor:string;
}

export const pruebaspretransfusionalespcpSchema = SchemaFactory.createForClass(pruebaspretransfusionalespcp);