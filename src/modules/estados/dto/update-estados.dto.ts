import { IsString } from "class-validator";


export class UpdateEstadoDto{
    @IsString()
    nombre_estado:string;
}