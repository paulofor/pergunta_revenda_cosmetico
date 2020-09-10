import { Injectable, Inject } from "@angular/core";
import { FCM } from "@ionic-native/fcm";
import { VisitanteApi } from "../shared/sdk/services/custom/Visitante";
import { Visitante } from "../shared/sdk/models/Visitante";
import { DispositivoUsuarioApi } from "../shared/sdk/services/custom/DispositivoUsuario";
import { DispositivoUsuario } from "../shared/sdk/models/DispositivoUsuario";
import { VisitaAppApi } from "../shared/sdk/services/custom/VisitaApp";
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { NotificacaoAppApi } from "../shared/sdk/services/custom/NotificacaoApp";
import { MonitorFaseInicialApp } from "../shared/sdk/models/MonitorFaseInicialApp";
import { MonitorFaseInicialAppApi } from "../shared/sdk/services/custom/MonitorFaseInicialApp";




@Injectable()
export class AcessaFcmService {

    versaoApp = ' v0.8.10';

    constructor(
        @Inject(FCM) protected fcm: FCM,
        @Inject(DispositivoUsuarioApi) protected dispositivoUsuarioSrv: DispositivoUsuarioApi,
        @Inject(VisitaAppApi) protected visitaAppSrv: VisitaAppApi,
        @Inject(VisitanteApi) protected visitanteSrv: VisitanteApi,
        @Inject(Storage) protected storage: Storage,
        @Inject(Device) protected device: Device,
        @Inject(NotificacaoAppApi) protected notificacaoAppSrv: NotificacaoAppApi,
        @Inject(MonitorFaseInicialAppApi) protected monitorSrv : MonitorFaseInicialAppApi
    ) {
    }


    public carregaUsuario() {

    }


    // Chamada externa
    public registraVisitaPagina(chavePagina, versaoAppId) {
        this.storage.get("chave").then((chaveUsuario) => {
            if (chaveUsuario) {
                this.visitaAppSrv.RegistraVisitaTelaApp(chaveUsuario, chavePagina, versaoAppId)
                    .subscribe((resultado: any) => {
                        //console.log('Resultado-VisitaPagina' , resultado);
                    })
            }
        });
    }



    public executaValidacao(versaoAppId: number) {
        //alert('executaValidacao(versaoAppId: number)');
        this.monitorSrv.Insere(0,'executaValidacao ' + versaoAppId + this.versaoApp,'')
            .subscribe((result) => { 
                this.monitorSrv.Insere(0,'result.executaValidacao ' + JSON.stringify(result) + this.versaoApp,'')
            })
        this.storage.get("chave")
            .then((dado) => {
                if (dado) {
                    console.log('Possui chaveCliente:', dado);
                    //alert('Recuperou Chave');
                    this.ligaReceptorNotificacao();
                    this.registraVisitaApp(dado, versaoAppId);
                } else {
                    this.monitorSrv.Insere(0,'Não possui chaveClient v0.8.7','')
                    .subscribe((result) => { 
                        this.monitorSrv.Insere(0,'result.executaValidacao ' + JSON.stringify(result) + this.versaoApp,'')
                    })
        
                    console.log('Não possui chaveClient');
                    //alert('Dado null');
                    //this.obtemTokenDispostivoUsuario(versaoAppId);
                    this.executaValidacaoRemote(versaoAppId);
                }
            })
            .catch((result) => {
                this.monitorSrv.Insere(0,'Catch--> this.storage.getchave v0.8.7','')
                .subscribe((result) => { 
                    this.monitorSrv.Insere(0,'result.executaValidacao ' + JSON.stringify(result) + this.versaoApp,'')
                })
            })
    }


    public executaValidacaoRemote(versaoAppId: number) {
        this.monitorSrv.Insere(0,'executaValidacaoRemote v0.8.7','')
            .subscribe((result) => { 
                this.monitorSrv.Insere(0,'result.executaValidacao ' + JSON.stringify(result) + this.versaoApp,'')
            })
        let filtro = { "include": "usuarioProduto", "where": { "and": [{ "uuid": this.device.uuid }] } }
        console.log('Tentativa recuperação chave por uuid: '+ this.device.uuid);
        this.monitorSrv.Insere(0,'Tentativa recuperação chave por uuid: '+ this.device.uuid,'')
            .subscribe((result) => { 
                this.monitorSrv.Insere(0,'result.executaValidacao ' + JSON.stringify(result) + this.versaoApp,'')
            })
        //this.dispositivoUsuarioSrv.findOneItem(filtro)
        this.dispositivoUsuarioSrv.FindByUuid(this.device.uuid)
            .subscribe(
                (dispositivo: DispositivoUsuario) => {
                					if (dispositivo) {
                    						console.log('Encontrou usuario por uuid');
                    						this.ligaReceptorNotificacao();
                    						this.registraMobile(dispositivo.usuarioProduto.chave,versaoAppId);
                    						this.registraVisitaApp(dispositivo.usuarioProduto.chave, versaoAppId);
                    					} else {
                                             console.log('Não encontrou usuario por uuid');
                                             this.monitorSrv.Insere(0,'Não encontrou usuario por uuid','')
                                             .subscribe((result) => { })
                                     
                    						this.inscreveFcm(versaoAppId)
                    					}
                },
                erro => {
                    console.log('Não encontrou usuario por uuid');
                    this.inscreveFcm(versaoAppId)
                }
            )
    }




    private registraMobile(chave, versaoAppId) {
        this.storage.set("chave", chave).then((successData) => {
            this.registraVisitaApp(chave, versaoAppId);
        })
    }

    private registraVisitaApp(chave, versaoAppId) {
        console.log('Passou em visita: ', chave);
        this.visitaAppSrv.RegistraVisitaVersaoApp(chave, versaoAppId)
            .subscribe((resultado: any) => {
                console.log('Resultado-VisitaApp', resultado);
            })
    }


    private inscreveFcm(versaoAppId: number) {
        this.monitorSrv.Insere(0,'Solicita inscrição em FCM' + this.versaoApp,'')
            .subscribe((result) => { 

            })
        this.fcm.subscribeToTopic('novo');
        this.fcm.getToken().then(token => {
            this.monitorSrv.Insere(0,'Recebeu token:' + token + this.versaoApp,'')
                .subscribe((result) => { 
        
                })
            this.registraTokenFcm(token, versaoAppId);
        });
        //this.registraTokenFcm('123456', versaoAppId);
        this.ligaReceptorNotificacao();
        this.fcm.onTokenRefresh().subscribe(token => {
            this.registraTokenFcm(token, versaoAppId);
        });
    }

    private registraTokenFcm(token, versaoAppId) {
        let dispositivoUsuario: DispositivoUsuario = new DispositivoUsuario();
        dispositivoUsuario.tokenFcm = token;
        dispositivoUsuario.versaoAppId = versaoAppId;
        dispositivoUsuario.codigoDispositivo = this.device.model;
        dispositivoUsuario.versaoSo = this.device.version;
        dispositivoUsuario.fabricante = this.device.manufacturer;
        dispositivoUsuario.serial = this.device.serial;
        dispositivoUsuario.uuid = this.device.uuid;
        this.criaComUsuario(dispositivoUsuario, versaoAppId);
    }

    public criaComUsuario(dispositivo: DispositivoUsuario, versaoApp) {
        this.dispositivoUsuarioSrv.CriaComUsuario(dispositivo)
            .subscribe((resultado: any) => {
                this.registraMobile(resultado, versaoApp);
            })
    }


    private ligaReceptorNotificacao() {
        //alert('ligaReceptorNotificacao()');
        this.fcm.onNotification().subscribe(data => {
            if (data.wasTapped) {
                this.notificacaoAppSrv.RegistraAcesso(data.tokenNotificacao)
                    .subscribe((resultado) => {
                        //console.log('Resultado: ', resultado);
                    });
            }
        });
    }


    /*
    .subscribe(
                (dispositvo:DispositivoUsuario) => {
                    this.ligaReceptorNotificacao();
                    this.registraVisitaApp(dispositvo.usuarioProduto.chave, versaoAppId);
                },
                erro => {
                    this.inscreveFcm(versaoAppId)
                }
            )
    */

}
