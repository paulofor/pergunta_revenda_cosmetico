
import { Injectable } from '@angular/core';
import { Container } from '../../models/Container';
import { User } from '../../models/User';
import { OportunidadeDia } from '../../models/OportunidadeDia';
import { Usuario } from '../../models/Usuario';
import { Acao } from '../../models/Acao';
import { Visitante } from '../../models/Visitante';
export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
	OportunidadeDia: OportunidadeDia,
	Usuario: Usuario,
	Acao: Acao,
	Visitante: Visitante,
	User: User,
    Container: Container
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
