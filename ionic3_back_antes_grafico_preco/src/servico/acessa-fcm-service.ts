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

    versaoApp = ' v0.8.13';
    contMsg = 0;

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

    public mensagemLog(texto) {
        this.monitorSrv.Insere(0,(this.contMsg++) + ') ' + texto + "-" + this.versaoApp,'')
            .subscribe((result) => {

            })
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
        this.mensagemLog('inicia validacao');
        this.storage.get("chave")
            .then((dado) => {
                if (dado) {
                    this.mensagemLog('Possui chaveCliente');
                    console.log('Possui chaveCliente:', dado);
                    //alert('Recuperou Chave');
                    this.ligaReceptorNotificacao();
                    this.registraVisitaApp(dado, versaoAppId);
                } else {
                    this.mensagemLog('Não possui chave cliente');
                    console.log('Não possui chaveClient');
                    this.executaValidacaoRemote(versaoAppId);
                }
            })
            .catch((result) => {
                this.mensagemLog('Erro no getChave');
            })
    }


    public executaValidacaoRemote(versaoAppId: number) {
        let filtro = { "include": "usuarioProduto", "where": { "and": [{ "uuid": this.device.uuid }] } }
        console.log('Tentativa recuperação chave por uuid: '+ this.device.uuid);
        this.mensagemLog('Tentativa recuperação chave por uuid: '+ this.device.uuid);
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
                                            this.mensagemLog('Não encontrou usuario por uuid');
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
        this.mensagemLog('Solicita inscrição em FCM');
        this.fcm.subscribeToTopic('novo');
        this.fcm.getToken().then(token => {
            this.mensagemLog('Recebeu token:' + token);
            this.registraTokenFcm(token, versaoAppId);
        });
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
        this.mensagemLog('Vai para o cria com usuario');
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



}
