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
import { Observable } from "rxjs";


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
    public registraVisitaPagina(chavePagina, versaoAppId) {
        console.log("Vai registrar chave pagina: " + chavePagina);
        //alert("Vai registrar chave pagina: " + chavePagina);
        this.storage.get("chave").then((chaveUsuario) => {
            //alert("Achou chave usuario: " + chaveUsuario)
            console.log("Achou chave usuario: " + chaveUsuario);
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
        this.storage.get("chave").then((dado) => {
            if (dado) {
                console.log('Possui chaveCliente:', dado);
                //alert('Recuperou Chave');
                this.ligaReceptorNotificacao();
                this.registraVisitaApp(dado, versaoAppId);
            } else {
                console.log('Não possui chaveClient');
                //alert('Dado null');
                //this.obtemTokenDispostivoUsuario(versaoAppId);
                this.executaValidacaoRemote(versaoAppId);
            }
        });
    }


    public executaValidacaoRemote(versaoAppId: number) {
        let filtro = { "include": "usuarioProduto", "where": { "and": [{ "uuid": this.device.uuid }] } }
        console.log('Tentativa recuperação chave por uuid: ', this.device.uuid);
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
                    						this.inscreveFcmDuplo(versaoAppId)
                    					}
                },
                erro => {
                    console.log('Não encontrou usuario por uuid');
                    this.inscreveFcmDuplo(versaoAppId)
                }
            )
    }




    private registraMobile(chave, versaoAppId) {
        console.log("Registrando chave: " + chave);
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

    // Novos que ainda não estão sendo usados - criando primeiro a chaveCliente e depois o token.
    private inscreveFcmDuplo(versaoAppId: number): Observable<any> {
        console.log('inscreveFcmDuplo');
        let dispositivoUsuario: DispositivoUsuario = new DispositivoUsuario();
        dispositivoUsuario.versaoAppId = versaoAppId;
        dispositivoUsuario.codigoDispositivo = this.device.model;
        dispositivoUsuario.versaoSo = this.device.version;
        dispositivoUsuario.fabricante = this.device.manufacturer;
        dispositivoUsuario.serial = this.device.serial;
        dispositivoUsuario.uuid = this.device.uuid;
        let saida = this.dispositivoUsuarioSrv.CriaComUsuario(dispositivoUsuario)
            .subscribe((chaveCliente: any) => {
                console.log('Recebeu chaveUsuario: ' , chaveCliente);
                this.registraMobile(chaveCliente, versaoAppId);
                this.inscreveFcmAtualizaToken(chaveCliente);
                
            });
        return saida;
    }
    private inscreveFcmAtualizaToken(chaveCliente) {
        this.fcm.subscribeToTopic('novo');
        this.fcm.getToken().then(token => {
            this.dispositivoUsuarioSrv.AtualizaToken(chaveCliente,token);

        });
        this.ligaReceptorNotificacao();
        this.fcm.onTokenRefresh().subscribe(token => {
            this.dispositivoUsuarioSrv.AtualizaToken(chaveCliente,token);
        });
    }



    private inscreveFcm(versaoAppId: number) {
        this.fcm.subscribeToTopic('novo');
        this.fcm.getToken().then(token => {
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
