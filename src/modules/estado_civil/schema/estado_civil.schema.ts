import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { type } from "os";

export type EstadoCivilDocument= HydratedDocument<EstadoCivil>;

@Schema()
export class EstadoCivil {
    @Prop({required:true, unique:true})
    id: string;

    @Prop({required:true})
    nombre: string;

}

export const EstadoCivilSchema = SchemaFactory.createForClass(EstadoCivil);