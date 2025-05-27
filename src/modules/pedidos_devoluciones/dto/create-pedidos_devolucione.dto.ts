import { IsNumber, IsOptional } from 'class-validator';

export class CreatePedidosDevolucionesDto {
    @IsNumber()
    @IsOptional()
    torundas_algodon?: number;

    @IsNumber()
    @IsOptional()
    torundas_gaza?: number;

    @IsNumber()
    @IsOptional()
    apositos?: number;

    @IsNumber()
    @IsOptional()
    guantes?: number;

    @IsNumber()
    @IsOptional()
    equipos_pinzas?: number;

    @IsNumber()
    @IsOptional()
    frascos_esteriles?: number;

    @IsNumber()
    @IsOptional()
    bolsas_colectoras?: number;

    @IsNumber()
    @IsOptional()
    alcohol?: number;

    @IsNumber()
    @IsOptional()
    hemoclasificadores?: number;

    @IsNumber()
    @IsOptional()
    hipoclorito?: number;

    @IsNumber()
    @IsOptional()
    tubos_ensayo?: number;

    @IsNumber()
    @IsOptional()
    gradillas?: number;

    @IsNumber()
    @IsOptional()
    sulfato_cobre?: number;

    @IsNumber()
    @IsOptional()
    ligaduras?: number;

    @IsNumber()
    @IsOptional()
    lancetas?: number;

    @IsNumber()
    @IsOptional()
    laminas_portaobjeto?: number;

    @IsNumber()
    @IsOptional()
    cloruro_sodio?: number;

    @IsNumber()
    @IsOptional()
    ringer_lactato?: number;

    @IsNumber()
    @IsOptional()
    equipos_suero?: number;

    @IsNumber()
    @IsOptional()
    tohallas?: number;

    @IsNumber()
    @IsOptional()
    jabon?: number;

    @IsNumber()
    @IsOptional()
    detergente?: number;

    @IsNumber()
    @IsOptional()
    vasos?: number;

    @IsNumber()
    @IsOptional()
    cubiertos?: number;

    @IsNumber()
    @IsOptional()
    platos?: number;

    @IsNumber()
    @IsOptional()
    termos?: number;

    @IsNumber()
    @IsOptional()
    jarras?: number;

    @IsNumber()
    @IsOptional()
    bandejas?: number;

    @IsNumber()
    @IsOptional()
    pesas?: number;

    @IsNumber()
    @IsOptional()
    sirope?: number;

    @IsNumber()
    @IsOptional()
    pan_embutido?: number;

    @IsNumber()
    @IsOptional()
    queso?: number;

    @IsNumber()
    @IsOptional()
    leche?: number;

    @IsNumber()
    @IsOptional()
    yogurt?: number;

    @IsNumber()
    @IsOptional()
    azucar?: number;

    @IsNumber()
    @IsOptional()
    cafe?: number;

    @IsNumber()
    @IsOptional()
    helado?: number;

    @IsNumber()
    @IsOptional()
    devoluciones?: number;
}


