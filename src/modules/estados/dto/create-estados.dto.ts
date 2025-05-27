import { IsString } from "class-validator";


export class CreateEstadoDto{
    @IsString()
    nombre_estado:string;
}