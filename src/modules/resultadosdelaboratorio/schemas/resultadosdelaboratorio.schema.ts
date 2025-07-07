import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type resultadosdelaboratorioDocument = HydratedDocument<resultadosdelaboratorio>;

@Schema()
export class resultadosdelaboratorio {
    @Prop({ required: true })
    id_orden: string;

    @Prop({ required: true })
    ci: string;

    @Prop({ required: true })
    resultado_laboratorio_grupo: string;

    @Prop({ required: true })
    resultado_laboratorio_factor: string;
}

export const resultadosdelaboratorioSchema = SchemaFactory.createForClass(resultadosdelaboratorio);