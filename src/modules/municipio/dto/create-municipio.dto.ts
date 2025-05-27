

import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateMunicipioDto {
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    name: string;
}
