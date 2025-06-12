import {  IsString } from "class-validator";


export class CreateGrupoSanguineoDto{
    @IsString()
    nombre:string;
}
