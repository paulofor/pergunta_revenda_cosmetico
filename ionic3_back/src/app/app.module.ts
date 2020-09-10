
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from '../shared/sdk';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Screenshot } from '@ionic-native/screenshot';
import { Device } from '@ionic-native/device';
import { ChartsModule } from 'ng2-charts';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
//import { ComandosZeroPage } from '../pages/comandos-zero/comandos-zero';
import { IonicStorageModule } from '@ionic/storage';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { PagSeguroApi } from '../shared/sdk/services/integracao/PagSeguro';
import { VisitanteApi } from '../shared/sdk/services/custom/Visitante';
import { CookieService } from 'ngx-cookie-service';
import { FCM } from '@ionic-native/fcm';
import { AcessaFcmService } from '../servico/acessa-fcm-service';
import { DispositivoUsuarioApi } from '../shared/sdk/services/custom/DispositivoUsuario';
import { VisitaAppApi } from '../shared/sdk/services/custom/VisitaApp';
import { NotificacaoAppApi } from '../shared/sdk/services/custom/NotificacaoApp';
import { UsuarioProdutoApi } from '../shared/sdk/services/custom/UsuarioProduto';
import { PagSeguroAssinaturaDadoIdentificacaoPage } from '../pages/pag-seguro-assinatura-dado-identificacao/pag-seguro-assinatura-dado-identificacao';
import { PagSeguroAssinaturaDadoClientePage } from '../pages/pag-seguro-assinatura-dado-cliente/pag-seguro-assinatura-dado-cliente';
import { PagSeguroAssinaturaDadoCartaoPage } from '../pages/pag-seguro-assinatura-dado-cartao/pag-seguro-assinatura-dado-cartao';
import { PagSeguroAssinaturaConfirmacaoPage } from '../pages/pag-seguro-assinatura-confirmacao/pag-seguro-assinatura-confirmacao';
import { PagSeguroAssinaturaSucessoPage } from '../pages/pag-seguro-assinatura-sucesso/pag-seguro-assinatura-sucesso';
import { ListaOportunidadePage } from '../pages/lista-oportunidade/lista-oportunidade';
import { ListaOportunidadePrecoPage } from '../pages/lista-oportunidade-preco/lista-oportunidade-preco';
import { ListaOportunidadeAssinaturaPage } from '../pages/lista-oportunidade-assinatura/lista-oportunidade-assinatura';
import { ListaOportunidadeGenericaPage } from '../pages/lista-oportunidade-generica/lista-oportunidade-generica';
import { ListaOportunidadePrecoAssinaturaPage } from '../pages/lista-oportunidade-preco-assinatura/lista-oportunidade-preco-assinatura';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OportunidadeDiaApi } from '../shared/sdk';
import { UsuarioApi } from '../shared/sdk';
import { AcaoApi } from '../shared/sdk';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MonitorFaseInicialAppApi } from '../shared/sdk/services/custom/MonitorFaseInicialApp';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    //ComandosZeroPage,
    PagSeguroAssinaturaDadoIdentificacaoPage,
    PagSeguroAssinaturaDadoClientePage,
    PagSeguroAssinaturaDadoCartaoPage,
    PagSeguroAssinaturaConfirmacaoPage,
    PagSeguroAssinaturaSucessoPage,
    ListaOportunidadePage,
	
    ListaOportunidadePrecoPage,
	
    ListaOportunidadeAssinaturaPage,
	
    ListaOportunidadeGenericaPage,
	
    ListaOportunidadePrecoAssinaturaPage,
	
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
    //ComandosZeroPage,
    PagSeguroAssinaturaDadoIdentificacaoPage,
    PagSeguroAssinaturaDadoClientePage,
    PagSeguroAssinaturaDadoCartaoPage,
    PagSeguroAssinaturaConfirmacaoPage,
    PagSeguroAssinaturaSucessoPage,
    ListaOportunidadePage,
	
    ListaOportunidadePrecoPage,
	
    ListaOportunidadeAssinaturaPage,
	
    ListaOportunidadeGenericaPage,
	
    ListaOportunidadePrecoAssinaturaPage,
	
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
 	NotificacaoAppApi,
  	UsuarioProdutoApi,
	OportunidadeDiaApi,
	
	UsuarioApi,
	
	AcaoApi,
	
    Screenshot,
    Device,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    CookieService,
    FCM,
    AcessaFcmService,
    DispositivoUsuarioApi,
    VisitaAppApi,
    MonitorFaseInicialAppApi
  ]
})
export class AppModule {}
