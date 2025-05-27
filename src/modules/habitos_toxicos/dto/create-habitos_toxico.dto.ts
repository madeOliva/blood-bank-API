import { IsNotEmpty, IsString } from "class-validator";

export class CreateHabitosToxicoDto {

    
      @IsString()
      @IsNotEmpty()
      ci: string;


      @IsString()
      @IsNotEmpty()
      habito: string[];

      @IsString()
      @IsNotEmpty()
      intensidad: string;
}
