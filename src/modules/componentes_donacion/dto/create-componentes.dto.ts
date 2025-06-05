import { IsNumber, IsString } from "class-validator";


export class CreateComponenteDto{
    @IsString()
    nombreComponente:string;

    @IsNumber()
    diasEsperaMasculino : number;
    
    @IsNumber()
    diasEsperaFemenino : number;

    @IsString()
    siglas:string;
}