import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateColorPielDto {
@IsString()
@IsNotEmpty()
id: string;

@IsString()
@IsNotEmpty()
nombre: string;


}
