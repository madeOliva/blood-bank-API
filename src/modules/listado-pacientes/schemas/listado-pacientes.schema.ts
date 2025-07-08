import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from 'mongoose'

export type listadoPacientesDocument = HydratedDocument<listadoPacientes>;

@Schema()
export class listadoPacientes {
    @Prop({ required: true })
    ci: string;

    @Prop({ required: true })
    no_hc: string;

    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    primerApellido: string;

    @Prop({ required: true })
    segundoApellido: string;

    @Prop({ required: true })
    sexo: string;

    @Prop({ required: true })
    edad: number;

}

export const listadoPacientesSchema = SchemaFactory.createForClass(listadoPacientes);
