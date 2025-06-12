import { IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateFactoresDto {
 

@IsString()
@IsNotEmpty()
signo: string;

}