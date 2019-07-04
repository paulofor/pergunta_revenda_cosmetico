import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerguntaRevendaPage } from '../pages/pergunta-revenda/pergunta-revenda';
import { ListaMarcasPage } from '../pages/lista-marcas/lista-marcas';
import { RespostaVersaoApi, SDKModels, LoopBackAuth, InternalStorage, SDKBrowserModule } from './shared/sdk/index';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerguntaRevendaPage,
    ListaMarcasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CommonModule,
		HttpClientModule,
		SDKBrowserModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerguntaRevendaPage,
    ListaMarcasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocketDriver,
		SDKModels,
		LoopBackAuth,
		InternalStorage,
    RespostaVersaoApi
  ]
})
export class AppModule {}
