import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSexoDto {
 

@IsString()
@IsNotEmpty()
nombre: string;

}
