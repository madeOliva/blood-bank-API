import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument ,Types} from "mongoose";
import { tipocomponente } from "src/modules/tipocomponente/schemas/tipocomponente.schemas";
import { tipocomponenteespecial } from "src/modules/tipocomponenteespecial/schemas/tipocomponenteespecial.schemas";
import { tipocomponentehabitual } from "src/modules/tipocomponentehabitual/schemas/tipocomponentehabitual.schemas";
import { tipopaciente } from "src/modules/tipopaciente/schemas/tipopaciente.schemas";

export type stockdelbancohasDocument = HydratedDocument<stockdelbancohas>;

@Schema()
export class stockdelbancohas {
    @Prop({required: true,unique: true})
    id: number;

    @Prop({ required: true, unique: true })
    codigo_bolsa: string;

    @Prop({ type: Types.ObjectId, ref:tipopaciente.name, required: true })
    tipo_paciente: tipopaciente;

    @Prop({ type: Types.ObjectId, ref:tipocomponente.name,required: true })
    tipo_componente: tipocomponente;

    @Prop({ type: Types.ObjectId, ref:tipocomponentehabitual.name,required: true })
    tipo_componente_habitual: tipocomponentehabitual;

    @Prop({ type: Types.ObjectId, ref:tipocomponenteespecial.name,required: true })
    tipo_componente_especial: tipocomponenteespecial;

    @Prop({ type: Date, required: true })
    fecha_extraccion: Date;

    @Prop({ type: Date, required: true })
    fecha_vencimiento: Date;

    @Prop({ required: true })
    grupo: string;

    @Prop({ required: true })
    factor: string;

    @Prop({ required: true })
    volumen_inicial: number;

    @Prop({ required: true })
    volumen_final: number;
}

export const stockdelbancohasSchema = SchemaFactory.createForClass(stockdelbancohas);
