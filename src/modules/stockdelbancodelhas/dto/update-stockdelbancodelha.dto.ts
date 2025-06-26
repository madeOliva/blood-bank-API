import { PartialType } from '@nestjs/mapped-types';
import { CreateStockdelbancodelhaDto } from './create-stockdelbancodelha.dto';

export class UpdateStockdelbancodelhaDto extends PartialType(CreateStockdelbancodelhaDto) {}
