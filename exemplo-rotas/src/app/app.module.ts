import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.model';
import { AuthService } from './login/auth.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
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
   AuthService,
   AuthGuard,
   CursosGuard,
   AlunosGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
