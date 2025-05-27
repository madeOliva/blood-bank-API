import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonalSaludDto } from './create-personal_salud.dto';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdatePersonalSaludDto extends PartialType(CreatePersonalSaludDto) {
@IsString()
@IsNotEmpty()
ci: string;

@IsString()
@IsNotEmpty()
foto: string;

@IsBoolean()
@IsNotEmpty()
es_militar: boolean;

@IsString()
@IsNotEmpty()
alias: string;

@IsString()
@IsNotEmpty()
direccion: string;

@IsString()
@IsNotEmpty()
provincia: string ;

@IsString()
@IsNotEmpty()
localidad: string;

@IsString()
@IsNotEmpty()
calle: string;

@IsString()
@IsNotEmpty()
apartamento: string;

@IsString()
@IsNotEmpty()
entrecalle: string;

@IsString()
@IsNotEmpty()
especilidad: string;

@IsString()
@IsNotEmpty()
cargo: string;

@IsString()
@IsNotEmpty()
ubicacion_laboral: string;


}
