import { IsString, IsNumber, IsBoolean, IsOptional, IsIn, ValidateNested, IsArray, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

class ComponentesDto {
  @IsIn(['CEPL', 'CP', 'PFC', 'CRIO'])
  tipo: string;

  @IsNumber()
  volumen: number;

  @IsBoolean()
  @IsOptional()
  envio_industria?: boolean;

  @IsString()
  @IsOptional()
  no_lote?: string;
}

export class CreateComponentesObtenidosDto {

  @IsNotEmpty()
  @IsString()
  no_hc: string; 

  @IsString()
  numero_consecutivo: string;

  @IsIn(['obtenido', 'baja', 'pendiente'])
  estado_obtencion: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ComponentesDto)
  @IsOptional()
  componentes?: ComponentesDto[];

  @IsIn(['Ictero', 'Lipemia', 'Hemolisis', 'Rotura'])
  @IsOptional()
  causa_baja?: string;

  @IsOptional()
  fecha_obtencion?: Date;

 
}