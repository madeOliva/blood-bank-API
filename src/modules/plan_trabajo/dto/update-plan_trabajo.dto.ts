import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanTrabajoDto } from './create-plan_trabajo.dto';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';


export class UpdatePlanTrabajoDto extends PartialType(CreatePlanTrabajoDto) {
    
    @IsString()
    @IsNotEmpty()
    areasalud: string;
    @IsDate()
    @IsNotEmpty()
    fecha: Date;
    @IsString()
    @IsNotEmpty()
    consejopopular: string;
    @IsString()
    @IsNotEmpty()
    consultoriosafectados: string;
    @IsString()
    @IsNotEmpty()
    lugardonacion: string;
    @IsString()
    @IsNotEmpty()
    compromiso: string;
    @IsString()
    @IsNotEmpty()
    reaponsablesalud: string;
    @IsString()
    @IsNotEmpty()
    cdr: string;
}
