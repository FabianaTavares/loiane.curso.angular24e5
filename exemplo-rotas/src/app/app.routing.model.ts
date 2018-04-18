import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { NgModel } from "@angular/forms";
//import { NgModuleResolver } from "@angular/compiler";

import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


const appRoutes: Routes = [
    { path: 'cursos', 
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard]
    }, //lazy loading aula 62
    //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    //{ path: 'cursos', component: CursosComponent },
    //{ path: 'curso/:id', component: CursoDetalheComponent},
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent,
        canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //{ path: '**', component: PaginaNaoEncontradaComponent } //, canActivate: [AuthGuard]}

];

//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}