import { IsString } from "class-validator";


export class CreateComponenteDto{
    @IsString()
    nombre_componente:string;
}