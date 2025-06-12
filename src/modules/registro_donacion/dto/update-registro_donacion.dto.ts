import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroDonacionesDto } from './create-registro_donacion.dto';

export class UpdateRegistroDonacionDto extends PartialType(CreateRegistroDonacionesDto) {}