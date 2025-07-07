import { PartialType } from '@nestjs/mapped-types';
import { CreateResultadosdelaboratorioDto } from './create-resultadosdelaboratorio.dto';

export class UpdateResultadosdelaboratorioDto extends PartialType(CreateResultadosdelaboratorioDto) {}
