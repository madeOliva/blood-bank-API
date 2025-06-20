import { PartialType } from '@nestjs/mapped-types';
import { CreatePruebaspretransfusionaleDto } from './create-pruebaspretransfusionale.dto';

export class UpdatePruebaspretransfusionaleDto extends PartialType(CreatePruebaspretransfusionaleDto) {}
