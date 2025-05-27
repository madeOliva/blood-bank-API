import { IsString } from "class-validator";


export class CreateReaccionDto{
    @IsString()
    nombre_reaccion:string;
}