import { PartialType } from '@nestjs/mapped-types';
import { CreateTipocomponenteespecialDto } from './create-tipocomponenteespecial.dto';

export class UpdateTipocomponenteespecialDto extends PartialType(CreateTipocomponenteespecialDto) {}
