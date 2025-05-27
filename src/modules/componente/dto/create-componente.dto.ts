import { IsString, IsNotEmpty} from 'class-validator';

export class CreateComponenteDto  {

  @IsString()
  @IsNotEmpty()
  id_componente: string;

  @IsString()
  @IsNotEmpty()
  nombre_componente: string;
}
