import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Componentes } from 'src/modules/componentes_donacion/schemas/componentes.schemas';
import { Estados } from 'src/modules/estados/schemas/estados.schemas';
import { Historia_Clinica } from 'src/modules/historia_clinica/schema/historia_clinica.schema';
import { Reacciones } from 'src/modules/reacciones/schemas/reacciones.schemas';
import { Document } from 'mongoose';

@Schema()
export class RegistroDonacion {
  @Prop({ unique: true })
  no_registro: string;

  @Prop({ type: Types.ObjectId, ref: 'Historia_Clinica' })
  historiaClinica: Historia_Clinica;

  @Prop({ type: Types.ObjectId, ref: Componentes.name })
  componente: Componentes; //Nomenclador

  @Prop()
  responsableInscripcion: string;
  @Prop()
  responsablePrechequeo: string;
  @Prop()
  responsableSeleccion: string;
  @Prop()
  responsableExtraccion: string;
  @Prop()
  responsableCalidad: string;

  @Prop()
  responsableLaboratorio: string;

  @Prop()
  fechaR: Date;

  @Prop()
  nombre_unidad: string;

  //DONACION
  @Prop()
  no_tubuladura?: string;

  @Prop()
  no_lote?: string;

  @Prop()
  estado?: string;

  @Prop({ type: Types.ObjectId, ref: Reacciones.name })
  reaccion?: Types.ObjectId; //Nomenclador

  @Prop({ type: Date })
  fechaD?: Date;

  @Prop({ default: false })
  es_desecho?: boolean;

  @Prop()
  numero_consecutivo?: number;

  //Donacion de Sangre
  @Prop()
  tipo_bolsa?: string;

  @Prop()
  volumen?: number;

  //Donacion de Plasma
  @Prop()
  TCM?: number;

  @Prop()
  TP?: number;

  @Prop()
  tiempo?: number; //en segundos

  @Prop()
  ciclos?: number;

  @Prop()
  ACD?: number;

  @Prop()
  no_lote_kitACD?: string;

  @Prop()
  no_lote_kitBach?: string;

  //Laboratorio

  @Prop({default: []})
  resultado_VIH?: string[];

  @Prop({default: []})
  resultado_rh?: string[];

  @Prop({default: []})
  resultado_hepatitisB?: string[];

  @Prop({default: []})
  resultado_hepatitisC?: string[];

  @Prop({default: []})
  resultado_tipage?: string[];

  @Prop({default: []})
  resultado_contratipaje?: string[];

  @Prop({default: []})
  resultado_DU?: string[];

  @Prop({default: []})
  resultado_serologia?: string[];

  @Prop({default: []})
  resultado_eritro?: number[];

  @Prop({default: []})
  resultado_hematocrito?: number[];

  @Prop({default: []})
  resultado_proteinas_totales?: number[];

  @Prop({default: []})
  resultado_TGP?: number[];

  @Prop({default: []})
  resultado_hemoglobina?: number[];

  @Prop({default: []})
  fecha_suma?: Date[];

  @Prop({default: []})
  fecha_inmuno?: Date[];

  @Prop({default: []})
  fecha_calidad?: Date[];

  //SELECCION Y PRECHEQUEO
  @Prop()
  examenP_grupo?: string;

  @Prop()
  examenP_factor?: string;

  @Prop()
  examenP_hemoglobina?: number; //Min Max

  @Prop()
  examenF_peso?: number; //Min=50lb Max=400lb

  @Prop()
  examenF_pulso?: number; // Min=60 Max=100

  @Prop()
  examenF_temSublingual?: number; //  Min=36.5 Max=37.5

  @Prop()
  examenF_temAxilar?: number; // Min=36 Max=37

  @Prop()
  examenF_hemoglobina?: number; // Min=12 Max=17

  @Prop()
  apto_prechequeo?: boolean;

  @Prop()
  apto_examenFisico?: boolean;

  @Prop()
  respuestas_interrogatorio?: [
    {
      respuesta?: boolean;
      respuesta_escrita?: string;
    },
  ];

  @Prop()
  apto_interrogatorio?: boolean;

  @Prop()
  observacion_interrogatorio?: string;

  @Prop()
  motivo_desecho?: string;
}



export const RegistroDonacionSchema =
  SchemaFactory.createForClass(RegistroDonacion);

  
  const CAMPOS_LAB = [
    'resultado_VIH',
    'resultado_hepatitisB',
    'resultado_hepatitisC',
    'fecha_suma',
    'resultado_serologia',
    'resultado_tipage',
    'resultado_contratipaje',
    'resultado_rh',
    'resultado_DU',
    'fecha_inmuno',
    'resultado_hemoglobina',
  ];
  
  // Middleware para limitar arrays a 4 elementos en actualizaciones con $push
  function validarLimiteArray(next) {
    const update: any = this.getUpdate();
  
    // Si update es null o no es un objeto, continúa
    if (!update || typeof update !== 'object') return next();
  
    // Si $push no existe, continúa
    if (!update.$push || typeof update.$push !== 'object') return next();
  
    // Obtener el documento actual
    this.model.findOne(this.getQuery()).then((doc) => {
      if (!doc) return next();
  
      for (const campo of CAMPOS_LAB) {
        if (update.$push && update.$push[campo]) {
          let nuevos: any[] = [];
          if (
            typeof update.$push[campo] === 'object' &&
            update.$push[campo].$each
          ) {
            nuevos = update.$push[campo].$each;
          } else {
            nuevos = [update.$push[campo]];
          }
          const total = (doc[campo]?.length || 0) + nuevos.length;
          if (total > 4) {
            return next(
              new Error(
                `No se pueden agregar más de 4 resultados en el campo ${campo}.`
              )
            );
          }
        }
      }
      next();
    }).catch(next);
  }
  
  // Aplica el middleware a los métodos de actualización relevantes
  RegistroDonacionSchema.pre('findOneAndUpdate', validarLimiteArray);
  RegistroDonacionSchema.pre('updateOne', validarLimiteArray);
  
  