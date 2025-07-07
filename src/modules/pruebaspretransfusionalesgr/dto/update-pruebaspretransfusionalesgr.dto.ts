import { PartialType } from '@nestjs/mapped-types';
import { CreatePruebaspretransfusionalesgrDto } from './create-pruebaspretransfusionalesgr.dto';

export class UpdatePruebaspretransfusionalesgrDto extends PartialType(CreatePruebaspretransfusionalesgrDto) {}
