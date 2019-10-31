
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from '../shared/sdk';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Screenshot } from '@ionic-native/screenshot';
import { ChartsModule } from 'ng2-charts';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { ComandosZeroPage } from '../pages/comandos-zero/comandos-zero';
import { IonicStorageModule } from '@ionic/storage';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { PagSeguroApi } from '../shared/sdk/services/integracao/PagSeguro';
import { VisitanteApi } from '../shared/sdk/services/custom/Visitante';
import { CookieService } from 'ngx-cookie-service';
import { FCM } from '@ionic-native/fcm';
import { AcessaFcmService } from '../servico/acessa-fcm-service';
import { DispositivoUsuarioApi } from '../shared/sdk/services/custom/DispositivoUsuario';
import { VisitaAppApi } from '../shared/sdk/services/custom/VisitaApp';

import { ListaOportunidadePage } from '../pages/lista-oportunidade/lista-oportunidade';
import { ListaOportunidadePrecoPage } from '../pages/lista-oportunidade-preco/lista-oportunidade-preco';
import { ListaOportunidadeAssinaturaPage } from '../pages/lista-oportunidade-assinatura/lista-oportunidade-assinatura';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OportunidadeDiaApi } from '../shared/sdk';
import { UsuarioApi } from '../shared/sdk';
import { AcaoApi } from '../shared/sdk';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ComandosZeroPage,
    ListaOportunidadePage,
	
    ListaOportunidadePrecoPage,
	
    ListaOportunidadeAssinaturaPage,
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SDKBrowserModule.forRoot(),
    ChartsModule,
    IonicStorageModule.forRoot(),
    BrMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ComandosZeroPage,
    ListaOportunidadePage,
	
    ListaOportunidadePrecoPage,
	
    ListaOportunidadeAssinaturaPage,
	
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
    PagSeguroApi,
    VisitanteApi,
	OportunidadeDiaApi,
	
	UsuarioApi,
	
	AcaoApi,
	
    Screenshot,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    CookieService,
    FCM,
    AcessaFcmService,
    DispositivoUsuarioApi,
    VisitaAppApi
  ]
})
export class AppModule {}
