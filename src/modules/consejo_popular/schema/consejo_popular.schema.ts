import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type consejo_popularDocument = HydratedDocument <ConsejoPopular>;

@Schema()
export class ConsejoPopular {
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

export const Consejo_PopularSchema = SchemaFactory.createForClass(ConsejoPopular);