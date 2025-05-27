import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';



@Schema()
export class AreaSalud {
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

export const Area_SaludSchema = SchemaFactory.createForClass(AreaSalud);