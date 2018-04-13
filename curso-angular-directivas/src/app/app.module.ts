import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { TesteComponent } from './teste/teste.component';
import { AngularCliLibsExternasComponent } from './angular-cli-libs-externas/angular-cli-libs-externas.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { DiretivaNgcontentComponent } from './diretiva-ngcontent/diretiva-ngcontent.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { CursosComponent } from './servicos/cursos/cursos.component';
import { CursosService } from './servicos/cursos/cursos.service';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    TesteComponent,
    AngularCliLibsExternasComponent,
    AngularCliLibsExternasComponent,
    DiretivaNgForComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    DiretivaNgcontentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
