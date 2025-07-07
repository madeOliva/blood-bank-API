import { PartialType } from '@nestjs/mapped-types';
import { CreateComponentesatransfundirDto } from './create-componentesatransfundir.dto';

export class UpdateComponentesatransfundirDto extends PartialType(CreateComponentesatransfundirDto) {}
