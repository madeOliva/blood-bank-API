import { PartialType } from '@nestjs/swagger';
import { CreateEstanciaExtranjeroDto } from './create-estancia_extranjero.dto';

export class UpdateEstanciaExtranjeroDto extends PartialType(CreateEstanciaExtranjeroDto) {}
