import { Device } from "@ionic-native/device";
import { FCM } from "@ionic-native/fcm";
import { VERSAO_APP_ID } from "../../app/const";
import { DispositivoUsuario } from "../../shared/sdk";
import { DispositivoUsuarioApi } from "../../shared/sdk/services/custom/DispositivoUsuario";
import { VisitaAppApi } from "../../shared/sdk/services/custom/VisitaApp";
import { ComponenteBase } from "../componente-base";

export abstract class BaseComponente extends ComponenteBase{


    constructor(protected storage: Storage, protected fcm: FCM, protected device: Device,
		protected dispositivoUsuarioSrv: DispositivoUsuarioApi, protected visitaAppSrv: VisitaAppApi) {
		super();
	}


    ngOnInit() {
		this.inicio()
   	}

    inicio() {
		console.log('-> inicio');
		this.storage.get("chave")
			.then((dado) => {
				if (!dado) {
					this.registraFcm();
				} else {
					this.obtemChave();
				}
			})
			.catch((result) => {
				console.log('Erro no getChave');
			})
	}
	registraFcm() {
		console.log('-> registraFcm');
		this.fcm.subscribeToTopic('novo');
        this.fcm.getToken().then(token => {
            this.recebeTokenFcm(token);
        });

	}
	recebeTokenFcm(token) {
		console.log('-> recebeTokenFcm');
		let dispositivoUsuario: DispositivoUsuario = new DispositivoUsuario();
        dispositivoUsuario.tokenFcm = token;
        dispositivoUsuario.versaoAppId = VERSAO_APP_ID;
        dispositivoUsuario.codigoDispositivo = this.device.model;
        dispositivoUsuario.versaoSo = this.device.version;
        dispositivoUsuario.fabricante = this.device.manufacturer;
        dispositivoUsuario.serial = this.device.serial;
        dispositivoUsuario.uuid = this.device.uuid;
        this.criaUsuario(dispositivoUsuario);

	}
	criaUsuario(dispositivoUsuario: DispositivoUsuario) {
		console.log('-> criaUsuario');
		return this.dispositivoUsuarioSrv.CriaComUsuario(dispositivoUsuario)
            .subscribe((resultado: any) => {
                this.armazenaCodigoUsuario(resultado);
            },
            erro => {
                console.log('-> Erro no criaComUsuario');
            })

	}
	armazenaCodigoUsuario(resultado) {
		console.log('-> armazenaCodigoUsuario');
		return this.storage.set("chave", resultado).then((successData) => {
			console.log('-> final.armazenaCodigoUsuario');
			this.obtemChave();
        })
	}
	obtemChave() {
		console.log('-> obtemChave');
		this.storage.get("chave")
			.then((chaveUsuario) => {		
				if (chaveUsuario) {
					this.registraEntradaTela(chaveUsuario);
				} else {
					console.log('-> obtemChave não encontrou chaveUsuario');
				}
			})
		.catch((result) => {
		   console.log('-> obtemChave Erro obtem chave: ' , result)
		})
	}
	registraEntradaTela(chaveUsuario) {
		console.log('-> registraEntradaTela');
		this.visitaAppSrv.RegistraVisitaTelaApp(chaveUsuario, this.getChavePagina(), VERSAO_APP_ID)
			.subscribe((resultado: any) => {
				console.log('-> registraEntradaTela.final');
				this.dadosTela(chaveUsuario);
			})
	}
	abstract dadosTela(chaveUsuario);
    abstract getChavePagina()

  
}