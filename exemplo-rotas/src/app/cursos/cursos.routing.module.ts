import { NgModule } from '@angular/core';
import { NgModel } from "@angular/forms";
import { NgModuleResolver } from "@angular/compiler";

import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes = [
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(cursosRoutes);

@NgModule({
    imports: [RouterModule.forRoot(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}