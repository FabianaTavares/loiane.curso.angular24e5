import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { EmitterVisitorContext } from '@angular/compiler/src/output/abstract_emitter';
import { EventEmitter } from '@angular/common/src/facade/async';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if(usuario.nome === 'usuario@email.com' 
        && usuario.senha === '123456'){
        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);
   
          this.router.navigate(['/']);
      }
    else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
