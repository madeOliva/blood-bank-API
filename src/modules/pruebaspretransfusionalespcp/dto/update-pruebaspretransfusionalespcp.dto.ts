import { PartialType } from '@nestjs/mapped-types';
import { CreatePruebaspretransfusionalespcpDto } from './create-pruebaspretransfusionalespcp.dto';

export class UpdatePruebaspretransfusionalespcpDto extends PartialType(CreatePruebaspretransfusionalespcpDto) {}
