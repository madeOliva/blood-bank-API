import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { type } from "os";

export type PersonalSaludDocument= HydratedDocument<PersonalSalud>;

@Schema()
export class PersonalSalud {
    @Prop({required:true, unique:true})
    ci: string;
    
    @Prop({required:true})
    foto: string;

    @Prop({required:true})
    es_militar: boolean;

    @Prop({required:true})
    alias: string;

    @Prop({required:true})
    direccion: string;

    @Prop({required:true})
    provincia: string;

    @Prop({required:true})
    localidad: string;

    @Prop({required:true})
    calle: string;

    @Prop({required:true})
    apartamento: string;

    @Prop({required:true})
    entrecalle: string;

    @Prop({required:true})
    especilidad: string;

    @Prop({required:true})
    cargo: string;

    @Prop({required:true})
    ubicacion_laboral: string;



}

export const PersonalSaludSchema = SchemaFactory.createForClass(PersonalSalud);
