import { IsString, IsIn } from 'class-validator';

export class UpdateCentrifugacionDto {
  @IsIn(['pendiente', 'obtenido', 'baja'])
  estado_obtencion: string;
}