import { IsString } from "class-validator";


export class UpdateReaccionDto{
    @IsString()
    nombre_reaccion:string;
}