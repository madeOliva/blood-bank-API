import { PartialType } from '@nestjs/mapped-types';
import { CreateTipopacienteDto } from './create-tipopaciente.dto';

export class UpdateTipopacienteDto extends PartialType(CreateTipopacienteDto) {}
