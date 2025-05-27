import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { type } from "os";

export type PersonaDocument= HydratedDocument<Persona>;

@Schema()
export class Persona {
    @Prop({required:true, unique:true, index:true})
    ci: string;

    @Prop({required:true})
    nombre: string;

    @Prop({required:true})
    primer_apellido: string;

    @Prop({required:true})
    segundo_apellido: string;

    @Prop({required:true})
    sexo: string;

    @Prop({required:true})
    edad: number;

    @Prop({required:true})
    estado_civil: string;

    @Prop({required:true})
    municipio: string;
}

export const PersonaSchema = SchemaFactory.createForClass(Persona);
