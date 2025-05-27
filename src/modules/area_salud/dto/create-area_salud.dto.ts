import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateAreaSaludDto {
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    name: string;
}
