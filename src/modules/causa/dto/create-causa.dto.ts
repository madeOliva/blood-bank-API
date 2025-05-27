import { IsString, IsNotEmpty} from 'class-validator';

export class CreateCausaDto  {

  @IsString()
  @IsNotEmpty()
  id_causa: string;

  @IsString()
  @IsNotEmpty()
  nombre_causa: string;
 
}
