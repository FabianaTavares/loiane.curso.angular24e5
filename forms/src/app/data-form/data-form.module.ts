import { VerificaEmailService } from './services/verifica-email.service';
// tslint:disable-next-line: quotemark
import { SharedModule } from './../shared/shared.module';
// tslint:disable-next-line: quotemark
import { DataFormComponent } from './data-form.component';
// tslint:disable-next-line: quotemark
import { NgModule } from '@angular/core';

@NgModule({
  imports: [SharedModule],
  declarations: [DataFormComponent],
  exports: [],
})
export class DataFormModule { }
