import { PartialType } from '@nestjs/mapped-types';
import { CreateColorPielDto } from './create-color_piel.dto';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateColorPielDto extends PartialType(CreateColorPielDto) {


@IsString()
@IsNotEmpty()
nombre: string;



}
