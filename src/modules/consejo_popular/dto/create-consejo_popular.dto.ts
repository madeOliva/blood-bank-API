import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateConsejoPopularDto {
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    name: string;
}
