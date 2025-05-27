import { PartialType } from '@nestjs/mapped-types';
import { CreateConsejoPopularDto } from './create-consejo_popular.dto';

export class UpdateConsejoPopularDto extends PartialType(CreateConsejoPopularDto) {}
