import { Component, OnInit } from '@angular/core';

import { CursosService } from './../cursos/cursos.service';

@Component({
  selector: 'app-criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrls: ['./criar-cursos.component.scss'],
  providers: [CursosService],
})
export class CriarCursosComponent implements OnInit {

/* Aula 40, fazer com que dois componentes (criar e listar)
utilizem o mesmo serviço */

  cursos: string[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

  onAddCurso(curso:string){
    this.cursosService.addCurso(curso);
  }

}
