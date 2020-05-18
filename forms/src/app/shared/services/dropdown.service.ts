import { Cidade } from './../models/cidade.model';
import { EstadoBr } from './../models/estado-br.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class DropdownService {
  constructor(private http: HttpClient) {}

  getEstadosBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  getCidades(idEstado: number) {
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
    .pipe(
      // tslint:disable-next-line: triple-equals
      map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado))
    );
  }

  getCargos() {
    return [
      { nome: 'DEV', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'DEV', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'DEV', nivel: 'Senior', desc: 'Dev Sr' },
    ];
  }

  getTecnologias() {
    return [
      { nome: 'Java', desc: 'Java' },
      { nome: 'javascript', desc: 'Javascript' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' },
    ];
  }
}
