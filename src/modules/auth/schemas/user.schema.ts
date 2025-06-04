import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum UserRole {
  ADMIN = 'admin',
  MEDICO = 'medico',
  MEDICO_HOSPITAL = 'medico_hospital',
  MEDICO_CONSULTORIO = 'medico_consultorio',
  TECNICO_PRECHEQUEO = 'tecnico_prechequeo',
  TECNICO_ASEGURAMIENTO_CALIDAD = 'tecnico_aseguramiento_calidad',
  JEFE_EXTRACCION_MOVIL = 'jefe_extraccion_movil',
  TECNICO_MOVIL = 'tecnico_movil',
  TECNICO_INSCRIPCION = 'tecnico_inscripcion',
  TECNICO_TRANSFUSION = 'tecnico_transfusion',
  TECNICO_DONACION = 'tecnico_donacion',
  TECNICO_LABORATORIO_SUMA = 'tecnico_laboratorio_suma',
  TECNICO_LABRORATORIO_INMUNO = 'tecnico_laboratorio_inmuno',
  TECNICO_LABORATORIO_CALIDAD = 'tecnico_laboratorio_calidad',
  TECNICO_PRODUCCION = 'tecnico_produccion',
}

@Schema()
export class User {
  @Prop({required:true})
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ enum: UserRole, default: UserRole.MEDICO})
  role: UserRole;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);