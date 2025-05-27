import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from 'mongoose'

export type PlanDocument = HydratedDocument<Plan_Trabajo>;

@Schema()
export class Plan_Trabajo {
    @Prop({ type: Date, required: true })
    fecha: Date;
  
    @Prop({ type: String, required: true }) // ✅ required: true evita valores null
    responsableDeSalud: string
   
    @Prop({ required: true })
    areasalud: string;

    @Prop({ required: true })
    consejopopular: string;

    @Prop({ required: true })
    consultoriosafectados: string[];

    @Prop({ required: true })
    lugarDonacion: string;

    @Prop({ required: true })
    compromiso: string;

    @Prop({ required: true })
    cdr: string;
}

export const Plan_TrabajoSchema = SchemaFactory.createForClass(Plan_Trabajo);



// Índice compuesto único (si es necesario)
Plan_TrabajoSchema.index(
  { fecha: 1, responsableDeSalud: 1 },
  { unique: true },
);