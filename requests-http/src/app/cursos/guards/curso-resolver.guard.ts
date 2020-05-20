import { CursosService } from './../services/cursos.service';
import { Curso } from './../models/curso';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {

  constructor(
    private service: CursosService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {

    // tslint:disable-next-line: no-string-literal
    if (route.params && route.params['id']) {
      // tslint:disable-next-line: no-string-literal
      return this.service.loadByID(route.params['id']);
    }

    return of({
      id: null,
      nome: null
    });
  }

}
