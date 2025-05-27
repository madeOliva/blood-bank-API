import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type municipioDocument = HydratedDocument<Municipio>;

@Schema()
export class Municipio {
  _id: Types.ObjectId;

  @Prop({ required: true, unique: true, type: String })
  name: string;

  @Prop({ default: false, select: false })
  isDeleted: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const MunicipioSchema = SchemaFactory.createForClass(Municipio);