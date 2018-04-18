import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { NgModel } from "@angular/forms";

import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';



const appRoutes: Routes = [
    { path: 'cursos', 
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    },
    { path: 'alunos',
        loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        //canActivateChild: [AlunosGuard]
        canLoad: [AuthGuard]
    },
    //{ path: 'cursos', component: CursosComponent },
    //{ path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'login', component: LoginComponent },
    //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: 'home', component: HomeComponent,
        canActivate: [AuthGuard] 
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontradaComponent } //, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}