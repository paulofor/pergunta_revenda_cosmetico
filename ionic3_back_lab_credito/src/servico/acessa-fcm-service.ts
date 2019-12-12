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


@Injectable()
export class AcessaFcmService {



    constructor(
        @Inject(FCM) protected fcm: FCM,
        @Inject(DispositivoUsuarioApi) protected dispositivoUsuarioSrv: DispositivoUsuarioApi,
        @Inject(VisitaAppApi) protected visitaAppSrv: VisitaAppApi,
        @Inject(VisitanteApi) protected visitanteSrv: VisitanteApi,
        @Inject(Storage) protected storage: Storage,
        @Inject(Device) protected device: Device,
        @Inject(NotificacaoAppApi) protected notificacaoAppSrv: NotificacaoAppApi
    ) {
    }


    public carregaUsuario() {

    }


    // Chamada externa
    public registraVisitaPagina(chavePagina) {
        this.storage.get("chave").then((chaveUsuario) => {
            if (chaveUsuario) {
                this.visitaAppSrv.RegistraVisitaTelaApp(chaveUsuario, chavePagina)
                    .subscribe((resultado: any) => {
                        //console.log('Resultado-VisitaPagina' , resultado);
                    })
            }
        });
    }



    public executaValidacao(versaoAppId: number) {
        //alert('executaValidacao(versaoAppId: number)');
        this.storage.get("chave").then((dado) => {
            if (dado) {
                //alert('Recuperou Chave');
                this.ligaReceptorNotificacao();
                this.registraVisitaApp(dado, versaoAppId);
            } else {
                //alert('Dado null');
                //this.obtemTokenDispostivoUsuario(versaoAppId);
                this.executaValidacaoRemote(versaoAppId);
            }
        });
    }


    public executaValidacaoRemote(versaoAppId: number) {
        let filtro = { "include": "usuarioProduto", "where": { "and": [{ "uuid": this.device.uuid }] } }
        //alert('Filtro: ' + JSON.stringify(filtro));
        this.dispositivoUsuarioSrv.findOneItem(filtro)
            .subscribe(
                (dispositvo:DispositivoUsuario) => {
                    this.ligaReceptorNotificacao();
                    this.registraVisitaApp(dispositvo.usuarioProduto.chave, versaoAppId);
                },
                erro => {
                    this.inscreveFcm(versaoAppId)
                }
            )
    }




    private registraMobile(chave, versaoAppId) {
        //alert('registraMobile(chave, versaoAppId)');
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
        //alert('inscreveFcm(versaoAppId: number)');
        this.fcm.subscribeToTopic('novo');
        this.fcm.getToken().then(token => {
            //alert('Meu token:' + token);
            this.registraTokenFcm(token, versaoAppId);

        });
        this.ligaReceptorNotificacao();
        this.fcm.onTokenRefresh().subscribe(token => {
            //alert('Novo token: ' + token);
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
        this.dispositivoUsuarioSrv.CriaComUsuario(dispositivoUsuario)
            .subscribe((resultado: any) => {
                this.registraMobile(resultado, versaoAppId);
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






    public testaDevice() {
        //alert('Testa device');
        //alert('Serial:' + this.device.serial);
        //alert('UUID:' + this.device.uuid);
        //alert('Plataforma:' + this.device.platform);
        //alert('SO:' + this.device.version);
        //alert('Modelo:' + this.device.model);
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
