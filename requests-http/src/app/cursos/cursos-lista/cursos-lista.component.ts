import { AlertModalService } from './../../shared/services/alert-modal.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Curso } from '../models/curso';
import { CursosService } from '../services/cursos.service';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { Router, ActivatedRoute } from '@angular/router';

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
  cursoSelecionado: Curso;

  // bsModalRef: BsModalRef;
  deleteModelRef: BsModalRef;
  @ViewChild('deleteModal', { static: true }) deleteModal: ElementRef;

  constructor(
    private service: CursosService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService

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

    /* this.service.list()
      .pipe(
        // tslint:disable-next-line: deprecation
        catchError(error => empty())
      )
      .subscribe(
        dados => {
          console.log(dados);
        }
      ); */
  }

  handleError() {
    /* this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';
  */
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(curso) {
    this.cursoSelecionado = curso;
    this.deleteModelRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  onConfirmDelete() {
    this.service.remove(this.cursoSelecionado.id)
      .subscribe(
        success => {
          this.onRefresh();
          this.deleteModelRef.hide();
        },
        error => this.alertService.showAlertDanger('Erro ao remover cursos. Tente novamente mais tarde.')
      );
  }

  onDeclineDelete() {
    this.deleteModelRef.hide();
  }

}
