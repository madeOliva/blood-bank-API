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
import { CalidadModule } from './modules/calidad/calidad.module';
import { CausaModule } from './modules/causa/causa.module';
import { CentrifugacionModule } from './modules/centrifugacion/centrifugacion.module';
import { ComponenteModule } from './modules/componente/componente.module';
import { ComponentesObtenidosModule } from './modules/componentes_obtenidos/componentes_obtenidos.module';
import { EstadoCivilModule } from './modules/estado_civil/estado_civil.module';
import { AreaSaludModule } from './modules/area_salud/area_salud.module';
import { ConsejoPopularModule } from './modules/consejo_popular/consejo_popular.module';
import { MunicipioModule } from './modules/municipio/municipio.module';
import { PlanTrabajoModule } from './modules/plan_trabajo/plan_trabajo.module';
import { PedidosDevolucionesModule } from './modules/pedidos_devoluciones/pedidos_devoluciones.module';
import { HctransfusionesModule } from './modules/hctransfusiones/hctransfusiones.module';
import { StockbancohasModule } from './modules/stockbancohas/stockbancohas.module';
import { TipocomponenteModule } from './modules/tipocomponente/tipocomponente.module';
import { TipocomponenteespecialModule } from './modules/tipocomponenteespecial/tipocomponenteespecial.module';
import { TipocomponentehabitualModule } from './modules/tipocomponentehabitual/tipocomponentehabitual.module';
import { TipopacienteModule } from './modules/tipopaciente/tipopaciente.module';
import { ReaccionesModule } from './modules/reacciones/reacciones.module';
import { EstadosModule } from './modules/estados/estados.module';
import { ComponentesModule } from './modules/componentes_donacion/componentes.module';
import { HabitosToxicosModule } from './modules/habitos_toxicos/habitos_toxicos.module';
import { EstanciaExtranjeroModule } from './modules/estancia_extranjero/estancia_extranjero.module';
import { HistoriaClinicaModule } from './modules/historia_clinica/historia_clinica.module';
import { DonacionModule } from './modules/donacion/donacion.module';
import { RegistroDonacionModule } from './modules/registro_donacion/registro_donacion.module';







@Module({

  //MongooseModule.forRoot('mongodb://localhost/banco_sangre'),
  //MongooseModule.forRoot('mongodb+srv://carlosmonterrey:Karlos8200@bloodbank.au9pv.mongodb.net/?retryWrites=true&w=majority&appName=Bloodbank', {
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
    ComponenteModule,
    ComponentesModule,
    ComponentesObtenidosModule,
    ConsejoPopularModule,
    DonacionModule,
    EstadoCivilModule,
    EstadosModule,
    EstanciaExtranjeroModule,
    HabitosToxicosModule,
    HctransfusionesModule,
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
    StockbancohasModule,
    TipocomponenteModule,
    TipocomponenteespecialModule,
    TipocomponentehabitualModule,
    TipopacienteModule,
    TransfusionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
