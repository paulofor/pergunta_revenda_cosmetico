
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface OportunidadeDiaInterface {
	"id"?: string;
	"precoVendaAtual"?: number;
	"precoVendaAnterior"?: number;
	"nomeProduto"?: string;
	"urlProduto"?: string;
	"nomeMarca"?: string;
	"idProduto"?: number;
	"nomeLojaVirtual"?: string;
	"imagemProduto"?: string;
}

export class OportunidadeDia implements OportunidadeDiaInterface {
	id?: string;
	precoVendaAtual?: number;
	precoVendaAnterior?: number;
	nomeProduto?: string;
	urlProduto?: string;
	nomeMarca?: string;
	idProduto?: number;
	nomeLojaVirtual?: string;
	imagemProduto?: string;
  constructor(data?: OportunidadeDiaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "OportunidadeDia";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of OportunidadeDia for dynamic purposes.
  **/
  public static factory(data: OportunidadeDiaInterface): OportunidadeDia{
    return new OportunidadeDia(data);
  }
  /**
  * @method getModelDefinition
  * @author Gerador Java
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Cosmetic_OportunidadeDia',
      plural: 'Cosmetic_OportunidadeDias',
      path: 'Cosmetic_OportunidadeDias',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "string"
        },
        "precoVendaAtual" : {
        	name : "precoVendaAtual",
        	type : "number"
        },
        "precoVendaAnterior" : {
        	name : "precoVendaAnterior",
        	type : "number"
        },
        "nomeProduto" : {
        	name : "nomeProduto",
        	type : "string"
        },
        "urlProduto" : {
        	name : "urlProduto",
        	type : "string"
        },
        "nomeMarca" : {
        	name : "nomeMarca",
        	type : "string"
        },
        "idProduto" : {
        	name : "idProduto",
        	type : "number"
        },
        "nomeLojaVirtual" : {
        	name : "nomeLojaVirtual",
        	type : "string"
        },
        "imagemProduto" : {
        	name : "imagemProduto",
        	type : "string"
        },
      },
      relations: {
      }
    }
  }
}