import { PartialType } from '@nestjs/mapped-types';
import { CreatePruebaspostransfusionaleDto } from './create-pruebaspostransfusionale.dto';

export class UpdatePruebaspostransfusionaleDto extends PartialType(CreatePruebaspostransfusionaleDto) {}
