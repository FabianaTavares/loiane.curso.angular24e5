import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultaCepService } from './services/consulta-cep.service';
import { HttpClientModule } from '@angular/common/http';
import { DropdownService } from './services/dropdown.service';
import { CampoControlErrorComponent } from './campo-control-error/campo-control-error.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormDebugComponent,
    CampoControlErrorComponent,
    ErrorMsgComponent,
    InputFieldComponent
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormDebugComponent,
    CampoControlErrorComponent,
    ErrorMsgComponent,
    InputFieldComponent
  ],
  providers: [DropdownService, ConsultaCepService]
})
export class SharedModule { }
