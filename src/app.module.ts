import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PreguntaModule } from './modules/preguntas/pregunta.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AntecedentesPersonalesModule } from './modules/antecedentes_personales/antecedentes_personales.module';
import { ColorPielModule } from './modules/color_piel/color_piel.module';
import { PaisModule } from './modules/pais/pais.module';
import { PersonaModule } from './modules/persona/persona.module';
import { PersonalSaludModule } from './modules/personal_salud/personal_salud.module';
import { ProvinciaModule } from './modules/provincia/provincia.module';
import { SalaModule } from './modules/sala/sala.module';
import { SexoModule } from './modules/sexo/sexo.module';
import { TransfusionesModule } from './modules/transfusiones/transfusiones.module';
import { ListadoPacientesModule } from './modules/listado-pacientes/listado-pacientes.module';
import { CalidadModule } from './modules/calidad/calidad.module';
import { CausaModule } from './modules/causa/causa.module';
import { CentrifugacionModule } from './modules/centrifugacion/centrifugacion.module';
import { ComponentesObtenidosModule } from './modules/componentes_obtenidos/componentes_obtenidos.module';
import { EstadoCivilModule } from './modules/estado_civil/estado_civil.module';
import { AreaSaludModule } from './modules/area_salud/area_salud.module';
import { ConsejoPopularModule } from './modules/consejo_popular/consejo_popular.module';
import { MunicipioModule } from './modules/municipio/municipio.module';
import { PlanTrabajoModule } from './modules/plan_trabajo/plan_trabajo.module';
import { PedidosDevolucionesModule } from './modules/pedidos_devoluciones/pedidos_devoluciones.module';
import { ProcesodetransfusionModule } from './modules/procesodetransfusion/procesodetransfusion.module';
import { StockdelbancodelhasModule } from './modules/stockdelbancodelhas/stockdelbancodelhas.module';
import { ComponentesatransfundirModule } from './modules/componentesatransfundir/componentesatransfundir.module';
import { PruebaspretransfusionalesgrModule } from './modules/pruebaspretransfusionalesgr/pruebaspretransfusionalesgr.module';
import { PruebaspretransfusionalespcpModule } from './modules/pruebaspretransfusionalespcp/pruebaspretransfusionalespcp.module';
import { ResultadosdelaboratorioModule } from './modules/resultadosdelaboratorio/resultadosdelaboratorio.module';
import { ReaccionesModule } from './modules/reacciones/reacciones.module';
import { EstadosModule } from './modules/estados/estados.module';
import { ComponentesModule } from './modules/componentes_donacion/componentes.module';
import { HabitosToxicosModule } from './modules/habitos_toxicos/habitos_toxicos.module';
import { EstanciaExtranjeroModule } from './modules/estancia_extranjero/estancia_extranjero.module';
import { HistoriaClinicaModule } from './modules/historia_clinica/historia_clinica.module';
import { DonacionModule } from './modules/donacion/donacion.module';
import { RegistroDonacionModule } from './modules/registro_donacion/registro_donacion.module';
import { GruposSanguineosModule } from './modules/grupos_sanguineos/grupos_sanguineos.module';
import { FactoresModule } from './modules/factores/factores.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    AntecedentesPersonalesModule,
    AreaSaludModule,
    AuthModule,
    CalidadModule,
    CausaModule,
    CentrifugacionModule,
    ColorPielModule,
    ComponentesModule,
    ComponentesObtenidosModule,
    ConsejoPopularModule,
    DonacionModule,
    EstadoCivilModule,
    EstadosModule,
    EstanciaExtranjeroModule,
    HabitosToxicosModule,
    ProcesodetransfusionModule,
    StockdelbancodelhasModule,
    ComponentesatransfundirModule,
    PruebaspretransfusionalesgrModule,
    PruebaspretransfusionalespcpModule,
    ResultadosdelaboratorioModule,
    HistoriaClinicaModule,
    MunicipioModule,
    PaisModule,
    PedidosDevolucionesModule,
    PersonaModule,
    PersonalSaludModule,
    PlanTrabajoModule,
    PreguntaModule,
    ProvinciaModule,
    ReaccionesModule,
    RegistroDonacionModule,
    SalaModule,
    SexoModule,
    TransfusionesModule,
    ListadoPacientesModule,
    GruposSanguineosModule,
    FactoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
