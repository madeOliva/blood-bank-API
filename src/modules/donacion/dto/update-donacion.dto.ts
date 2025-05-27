import { IsArray, IsBoolean, IsDate, IsNumber, IsString } from "class-validator";
import { Types } from "mongoose";


export class UpdateDonacionDto {
    @IsString()
    no_tubuladura: string;
  
    @IsString()
    no_lote: string;

    @IsString()
    ci_donante: string;
  
    @IsString()
    estado: Types.ObjectId; //Nomenclador
  
    @IsString()
    reaccion: Types.ObjectId; //Nomenclador

    @IsDate()
    fecha: Date;
    
    @IsString()
    nombre_tecnico: string;
   
    @IsBoolean()
    es_desecho: boolean;

    @IsNumber()
    numero_consecutivo: number;
  
  
    //Donacion de Sangre
    @IsString()
    tipo_bolsa: string; //Se puede poner como un nomenclador tambien
  
    @IsNumber()
    volumen: number;
  
    //Donacion de Plasma
    @IsNumber()
    TCM: number;
  
    @IsNumber()
    TP: number;
  
    @IsNumber()
    tiempo: number; //en segundos
  
    @IsNumber()
    ciclos: number;
  
    @IsString()
    ACD: string;
  
    @IsString()
    no_lote_kitACD: string;
  
    @IsString()
    no_lote_kitBach: string;
    
  
    //Laboratorio
    resultado_VIH: boolean[];
  
    
    resultado_hepatitisB: boolean[];
  
    
    
    resultado_hepatitisC: boolean[];
  
    
    confirmatoria_hepatitisB: boolean[];
  
    
    resultado_tipage: string[];
  
    
    resultado_contratipaje: string[];
  
    
    resultado_DU: boolean[];
  
    
    resultado_serologia: boolean[];
  
    
    resultado_eritro: number[];
  
    
    resultado_hematocrito: number[];
  
    
    resultado_proteinas_totales: number[];
  
    
    resultado_TGP: number[];
  
    
    resultado_hemoglobina: number[];    
}