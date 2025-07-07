import { PartialType } from '@nestjs/mapped-types';
import { CreateProcesodetransfusionDto } from './create-procesodetransfusion.dto';

export class UpdateProcesodetransfusionDto extends PartialType(CreateProcesodetransfusionDto) {}
