import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { routing } from './app.routing';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from './cursos/cursos.service';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app.routing.model';
import { AuthService } from './login/auth.service';
//import { AlunosModule } from './alunos/alunos.module';
//import { AuthService } from './login/auth.service';
//import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
   // PaginaNaoEncontradaComponent
    /*CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   // CursosModule,
    //AlunosModule,
   AppRoutingModule,
  ],
  providers: [
   // CursosService
   AuthService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
