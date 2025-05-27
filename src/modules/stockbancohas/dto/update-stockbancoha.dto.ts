import { PartialType } from '@nestjs/mapped-types';
import { CreateStockbancohaDto } from './create-stockbancoha.dto';

export class UpdateStockbancohaDto extends PartialType(CreateStockbancohaDto) {}
