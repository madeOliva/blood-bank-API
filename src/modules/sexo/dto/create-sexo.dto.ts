import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSexoDto {
    @IsString()
@IsNotEmpty()
id: string;

@IsString()
@IsNotEmpty()
nombre: string;

}
