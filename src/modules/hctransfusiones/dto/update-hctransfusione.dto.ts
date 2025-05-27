import { PartialType } from '@nestjs/mapped-types';
import { CreateHctransfusioneDto } from './create-hctransfusione.dto';

export class UpdateHctransfusioneDto extends PartialType(CreateHctransfusioneDto) {}
