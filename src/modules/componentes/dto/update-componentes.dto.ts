import { IsString } from "class-validator";


export class UpdateComponenteDto{
    @IsString()
    nombre_componente:string;
}