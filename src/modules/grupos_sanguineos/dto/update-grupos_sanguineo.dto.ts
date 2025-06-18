import {  IsString } from "class-validator";


export class UpdateGrupoSanguineoDto{
    @IsString()
    nombre:string;
}
