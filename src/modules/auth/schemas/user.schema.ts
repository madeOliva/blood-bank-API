import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum UserRole {
  ADMIN = 'Admin',
  MEDICO = 'Médico de selección',
  MEDICO_HOSPITAL = 'Médico del hospital',
  MEDICO_CONSULTORIO = 'Médico del consultorio',
  TECNICO_PRECHEQUEO = 'Técnico de prechequeo',
  TECNICO_ASEGURAMIENTO_CALIDAD = 'Técnico de aseguramiento de calidad',
  JEFE_EXTRACCION_MOVIL = 'Jefe de extracción móvil',
  TECNICO_MOVIL = 'Técnico de móvil',
  TECNICO_INSCRIPCION = 'Técnico de inscripción',
  TECNICO_TRANSFUSION = 'Técnico de transfusión',
  TECNICO_DONACION = 'Técnico de donación',
  TECNICO_LABORATORIO_SUMA = 'Tecnico de laboratorio suma',
  TECNICO_LABRORATORIO_INMUNO = 'Técnico de laboratorio inmuno',
  TECNICO_LABORATORIO_CALIDAD = 'Técnico de laboratorio calidad',
  TECNICO_PRODUCCION = 'Técnico de producción',
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