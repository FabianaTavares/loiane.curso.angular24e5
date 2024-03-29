import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService],
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosService: CursosService;

  constructor(_cursosService: CursosService) { 
    //this.cursosService = new CursosService();
   this.cursosService = _cursosService;
  }

  ngOnInit() {
    /* Metodo que é executado quando a classe é inicializada. */
    this.cursos = this.cursosService.getCursos();
    
    CursosService.criouNovoCurso.subscribe(
     
      curso => this.cursos.push(curso)

    );
  }

}
