import { IsNotEmpty, IsString } from "class-validator";


export class CreatePreguntaDto {
    @IsString()
    @IsNotEmpty()
    pregunta:string;

}
