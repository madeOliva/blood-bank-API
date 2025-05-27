// src/persona/dto/persona-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class PersonaResponseDto {
  @ApiProperty({ description: 'ID único de la persona' })
  _id: string;

  @ApiProperty({ description: 'Cédula de identidad', example: '03071862333' })
  ci: string;

  @ApiProperty({ description: 'Nombre de la persona', example: 'Juan' })
  nombre: string;

  @ApiProperty({ description: 'Primer apellido', example: 'Pérez' })
  primer_apellido: string;

  @ApiProperty({ description: 'Segundo apellido', example: 'González' })
  segundo_apellido: string;
}