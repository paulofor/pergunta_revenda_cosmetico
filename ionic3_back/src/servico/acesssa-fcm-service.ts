import { Injectable, Inject } from "@angular/core";
import { FCM } from "@ionic-native/fcm";
import { VisitanteApi } from "../shared/sdk/services/custom/Visitante";
import { Visitante } from "../shared/sdk/models/Visitante";

@Injectable()
export class AcessaFcmService {

    constructor(
        @Inject(FCM) protected fcm: FCM,
        @Inject(VisitanteApi) protected visitanteSrv: VisitanteApi
    ) {
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