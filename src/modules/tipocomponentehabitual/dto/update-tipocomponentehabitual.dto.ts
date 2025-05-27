import { PartialType } from '@nestjs/mapped-types';
import { CreateTipocomponentehabitualDto } from './create-tipocomponentehabitual.dto';

export class UpdateTipocomponentehabitualDto extends PartialType(CreateTipocomponentehabitualDto) {}
