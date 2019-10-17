import { Injectable, Inject } from "@angular/core";
import { FCM } from "@ionic-native/fcm";
import { VisitanteApi } from "../shared/sdk/services/custom/Visitante";
import { Visitante } from "../shared/sdk/models/Visitante";
import { DispositivoUsuarioApi } from "../shared/sdk/services/custom/DispositivoUsuario";
import { DispositivoUsuario } from "../shared/sdk/models/DispositivoUsuario";

@Injectable()
export class AcessaFcmService {



    constructor(
        @Inject(FCM) protected fcm: FCM,
        @Inject(DispositivoUsuarioApi) protected dispositivoUsuarioSrv: DispositivoUsuarioApi,
        @Inject(VisitanteApi) protected visitanteSrv: VisitanteApi,
        @Inject(Storage) protected storage: Storage
    ) {
    }


    public executaValidacao(versaoAppId:number) {
        this.storage.get("dispositivo").then((dado) => {
            if (dado) {
                this.registraVisita(dado);
            } else {
                this.obtemTokenDispostivoUsuario(versaoAppId);
            }
        });
    }
    public executaValidacaoFake(versaoAppId:number) {
        this.storage.get("dispositivo").then((dado) => {
            if (dado) {
                this.registraVisita(dado);
            } else {
                this.obtemTokenDispostivoUsuarioFake(versaoAppId);
            }
        });
    }

	
    private registraMobile(chave) {
        this.storage.set("chave", chave).then((successData) => {
            this.registraVisita(chave);
        })
    }
    private registraVisita(chave) {

    }
    private obtemTokenDispostivoUsuarioFake(versaoAppId:number) {
        var token = '112231213215415615151515'
        console.log('Token fake: ', token);
        let dispositivoUsuario : DispositivoUsuario = new DispositivoUsuario();
        dispositivoUsuario.tokenFcm = token;
        dispositivoUsuario.versaoAppId = versaoAppId;
        this.dispositivoUsuarioSrv.CriaComUsuario(dispositivoUsuario)
            .subscribe((resultado: any) => {
                console.log('Resultado:', resultado);
                this.registraMobile(resultado);
            })
    }
    private obtemTokenDispostivoUsuario(versaoAppId:number) {
        this.fcm.subscribeToTopic('all');
        //alert('inscreveu');
        let dispositivoUsuario : DispositivoUsuario = new DispositivoUsuario();
        this.fcm.getToken().then(token => {
            //alert(token);
            dispositivoUsuario.tokenFcm = token;
            dispositivoUsuario.versaoAppId = versaoAppId;
            //alert(JSON.stringify(disppositivoUsuario));
            this.dispositivoUsuarioSrv.CriaComUsuario(dispositivoUsuario)
            .subscribe((resultado: any) => {
                console.log('Resultado:', resultado);
                this.registraMobile(resultado);
            })
        });
        this.fcm.onNotification().subscribe(data => {
            //alert('Recebeu notificacao')
            if (data.wasTapped) {
                //alert('background');
            } else {
                //alert('foreground');
            }
            //let visitaNotificacao = new Visitante();
            //visitaNotificacao.versaoAppId = 789;
            //this.visitanteSrv.criaItem(visitaNotificacao)
            //    .subscribe((resultado: any) => {
            //        alert('notificacao: ' + JSON.stringify(resultado));
            //    })

        });
        this.fcm.onTokenRefresh().subscribe(token => {
            //alert('token')
        });

    }


    
    public obtemToken(visitanteCorrente: Visitante) {
        var token = '112231213215415615151515'
        console.log('Token fake: ', token);
        visitanteCorrente.fcmToken = token;
        visitanteCorrente.dataHoraNotificacao = new Date();
        this.visitanteSrv.atualizaItem(visitanteCorrente.id, visitanteCorrente)
            .subscribe((resultado: any) => {
                console.log('Resultado:', resultado);
            })
    }



    public obtemToken1(visitanteCorrente: Visitante) {
        this.fcm.subscribeToTopic('all');
        alert('inscreveu');
        this.fcm.getToken().then(token => {
            alert(token);
            //localStorage.setItem('token', token);
            visitanteCorrente.fcmToken = token;
            visitanteCorrente.dataHoraNotificacao = new Date();
            alert(JSON.stringify(visitanteCorrente));
            this.visitanteSrv.atualizaItem(visitanteCorrente.id, visitanteCorrente)
                .subscribe(
                    (resultado: any) => {
                        alert('Sucesso:' + JSON.stringify(resultado))
                    },
                    (erro: any) => {
                        alert('Erro:' + JSON.stringify(erro))
                    });
        });
        this.fcm.onNotification().subscribe(data => {
            alert('Recebeu notificacao')
            if (data.wasTapped) {
                alert('background');
            } else {
                alert('foreground');
            }
            let visitaNotificacao = new Visitante();
            visitaNotificacao.versaoAppId = 789;
            this.visitanteSrv.criaItem(visitaNotificacao)
                .subscribe((resultado: any) => {
                    alert('notificacao: ' + JSON.stringify(resultado));
                })

        });
        this.fcm.onTokenRefresh().subscribe(token => {
            //alert('token')
        });

    }

}
