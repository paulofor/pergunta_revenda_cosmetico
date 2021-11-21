
import { OportunidadeDia, Usuario } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';

import { Page } from 'ionic-angular/umd/navigation/nav-util';

import { BaseComponente } from '../base-component/base-componente';


// Tipo: LISTA_FIND_APP - Criado por: templates/ionic3/pages/lista-find-app/ListaFindAppPageProdBaseTs.javajet
export abstract class ListaOportunidadePrecoTabelaPageBase extends BaseComponente{

    protected usuario: Usuario;

	protected listaItem: OportunidadeDia[];
	protected abstract getFiltro(): LoopBackFilter;
	protected erroMsg: string;
	
	private chave : string = '0a5037d4224612dbd95f46c69458c054ab678678';
	
	getChavePagina() {
		return this.chave;
	}

		 
	getPageEdicao(): Page {
	
    	throw new Error("ListaOportunidadePrecoTabelaPage sem tela de edicao.");
    	
  	}
  	getPageDetalhe(): Page {
	
    	throw new Error("ListaOportunidadePrecoTabelaPage sem tela de detalhe.");
    	
  	}






	
}
