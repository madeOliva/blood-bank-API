import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { type } from "os";

export type ColorPielDocument= HydratedDocument<ColorPiel>;

@Schema()
export class ColorPiel {
    @Prop({required:true, unique:true})
    id: string;

    @Prop({required:true})
    nombre: string;

}

export const ColorPielSchema = SchemaFactory.createForClass(ColorPiel);