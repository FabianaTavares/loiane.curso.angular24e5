import { AlertModalService } from './../../shared/services/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso';
import { CursosService } from '../services/cursos.service';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  cursos: Curso[];
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();
  //bsModalRef: BsModalRef;

  constructor(
    private service: CursosService,
    private alertService: AlertModalService

  ) { }

  ngOnInit() {
    /*  this.service.list()
     .subscribe(dados => this.cursos = dados); */
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list()
      .pipe(
        catchError(error => {
          console.error(error);
          // this.error$.next(true);
          this.handleError();
          // tslint:disable-next-line: deprecation
          return empty();
        })
      );

    this.service.list()
      .pipe(
        // tslint:disable-next-line: deprecation
        catchError(error => empty())
      )
      .subscribe(
        dados => {
          console.log(dados);
        }
      );
  }

  handleError() {
    /* this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';
  */
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }

}
