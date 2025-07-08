import { PartialType } from '@nestjs/mapped-types';
import { CreateListadoPacienteDto } from './create-listado-paciente.dto';

export class UpdateListadoPacienteDto extends PartialType(CreateListadoPacienteDto) {}
