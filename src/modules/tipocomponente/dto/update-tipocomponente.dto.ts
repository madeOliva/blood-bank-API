import { PartialType } from '@nestjs/mapped-types';
import { CreateTipocomponenteDto } from './create-tipocomponente.dto';

export class UpdateTipocomponenteDto extends PartialType(CreateTipocomponenteDto) {}
