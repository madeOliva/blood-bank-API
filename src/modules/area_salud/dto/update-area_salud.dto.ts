import { PartialType } from '@nestjs/mapped-types';
import { CreateAreaSaludDto } from './create-area_salud.dto';

export class UpdateAreaSaludDto extends PartialType(CreateAreaSaludDto) {}
