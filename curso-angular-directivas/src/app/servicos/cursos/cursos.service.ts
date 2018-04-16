import { Injectable } from "@angular/core";

@Injectable() /* decorator injetavel */
export class CursosService {

    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];
    constructor(){
        console.log('CursoService');
    }

    getCursos(){
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
    }
}