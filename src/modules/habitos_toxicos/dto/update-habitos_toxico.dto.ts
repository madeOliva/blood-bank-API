import { PartialType } from '@nestjs/swagger';
import { CreateHabitosToxicoDto } from './create-habitos_toxico.dto';

export class UpdateHabitosToxicoDto extends PartialType(CreateHabitosToxicoDto) {}
