import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from 'mongoose'

export type Historia_ClinicaDocument = HydratedDocument<Historia_Clinica>;

@Schema()
export class Historia_Clinica {
    @Prop({ required: true, unique: true, index: true })
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

    @Prop({ required: true })
    color_piel: string;

    @Prop({ required: true })
    no_hc: string;

    @Prop({ required: true })
    grupo_sanguine: string;

    @Prop({ required: true })
    factor: string;

    @Prop({ required: true })
    consejo_popular: string;

    @Prop({ required: true })
    no_consultorio: string;

    @Prop({ required: true })
    ocupacion: string;

    @Prop({ required: true })
    telefono: string;
    
    @Prop({ required: true })
    telefonoLaboral: string;

    @Prop({ required: true })
    centro_laboral: string;

    @Prop({ required: true })
    otra_localizacion: string;

    @Prop({ required: true })
    cat_ocupacional: string;

    @Prop({ required: true })
    estilo_vida: string;

    @Prop({ required: true })
    alimentacion: string;

    @Prop({ required: true })
    genero_vida: string;

    @Prop({ required: true })
    es_donanteControlado: boolean;

    @Prop({ required: true })
    es_posibleDonante: boolean;

    @Prop({ required: true })
    alergias: string;

    @Prop({ required: true })
    antecedentesPersonales: string[];
}

export const Historia_ClinicaSchema = SchemaFactory.createForClass(Historia_Clinica);