import { EstadoBr } from './../models/estado-br.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DropdownService {
  constructor(private http: HttpClient) {}

  getEstadosBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  getCargos(){
    return [
      { nome:'DEV', nivel: 'Junior', desc: 'Dev Jr' },
      { nome:'DEV', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome:'DEV', nivel: 'Senior', desc: 'Dev Sr' }
    ];
  }

}