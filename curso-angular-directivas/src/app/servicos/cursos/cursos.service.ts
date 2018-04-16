import { Injectable,  EventEmitter } from "@angular/core";

// import { EventEmitter } from "selenium-webdriver";

@Injectable() /* decorator injetavel */
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso  = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];
    constructor(){
        console.log('CursoService');
    }

    getCursos(){
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}