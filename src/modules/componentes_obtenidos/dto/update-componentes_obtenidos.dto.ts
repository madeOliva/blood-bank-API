import { IsString, IsNumber, IsBoolean, IsOptional, IsIn, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

class UpdateComponentesDto {
  @IsIn(['CEPL', 'CP', 'PFC', 'CRIO'])
  @IsOptional()
  tipo?: string;

  @IsNumber()
  @IsOptional()
  volumen?: number;

  @IsBoolean()
  @IsOptional()
  envio_industria?: boolean;

  @IsString()
  @IsOptional()
  no_lote?: string;
}

export class UpdateComponentesObtenidosDto {


  @IsString()
  @IsOptional()
  numero_consecutivo?: string;

  @IsIn(['obtenido', 'baja', 'pendiente'])
  @IsOptional()
  estado_obtencion?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateComponentesDto)
  @IsOptional()
  componentes?: UpdateComponentesDto[];

  @IsIn(['Ictero', 'Lipemia', 'Hemolisis', 'Rotura'])
  @IsOptional()
  causa_baja?: string;

  @IsOptional()
  fecha_obtencion?: Date;
}