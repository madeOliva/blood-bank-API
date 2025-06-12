import { IsNotEmpty, IsString } from 'class-validator';


export class UpdateFactoresDto {
 

@IsString()
@IsNotEmpty()
signo: string;

}