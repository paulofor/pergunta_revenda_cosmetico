
import { Injectable } from '@angular/core';
import { Container } from '../../models/Container';
import { User } from '../../models/User';
import { Visitante } from '../../models/Visitante';
import { DispositivoUsuario } from '../../models/DispositivoUsuario';
import { VisitaApp } from '../../models/VisitaApp';
import { OportunidadeDia } from '../../models/OportunidadeDia';
import { Usuario } from '../../models/Usuario';
import { Acao } from '../../models/Acao';
import { PrecoDiario } from '../../models/PrecoDiario';
export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
	OportunidadeDia: OportunidadeDia,
	Usuario: Usuario,
	Acao: Acao,
	PrecoDiario: PrecoDiario,
	User: User,
    Container: Container,
    Visitante : Visitante,
    DispositivoUsuario : DispositivoUsuario,
    VisitaApp : VisitaApp
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
