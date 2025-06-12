
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class GruposSanguineos extends Document {
  @Prop({ required: true,unique: true })
    nombre: string;
}

export const GruposSanguineosSchema = SchemaFactory.createForClass(GruposSanguineos);