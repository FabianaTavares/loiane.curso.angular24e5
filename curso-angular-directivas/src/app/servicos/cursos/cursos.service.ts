import { Injectable } from "@angular/core";

@Injectable() /* decorator injetavel */
export class CursosService {

    getCursos(){
        return ['Angular 2', 'Java', 'Phonegap'];
    }
}