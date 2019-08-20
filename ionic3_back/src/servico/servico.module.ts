

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from '../shared/sdk';
import { HttpClientModule } from '@angular/common/http';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';

import { OportunidadeDiaApi } from '../shared/sdk';
import { UsuarioApi } from '../shared/sdk';
import { AcaoApi } from '../shared/sdk';
import { VisitanteApi } from '../shared/sdk';

// Nao tem PagSeguroApi pq parece nao ser usado em lugar nenhum.

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		SDKBrowserModule.forRoot(),
	],
	providers: [
		SocketDriver,
		SDKModels,
		LoopBackAuth,
		InternalStorage,
		OportunidadeDiaApi,
		UsuarioApi,
		AcaoApi,
		VisitanteApi,
	],
	declarations: 
	[
	]
})
export class ServicoModule { }