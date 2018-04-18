import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';


const alunosRoutes = [
    {path: 'alunos', component: AlunosComponent, 
    canActivateChield: [AlunosGuard],
    children : [
        {path: 'novo', component: AlunoFormularioComponent},
        {path: ':id', component: AlunoDetalheComponent,
            resolve: { aluno: AlunoDetalheResolver }
        },
        {path: ':id/editar', component: AlunoFormularioComponent,
            canDeactivate: [AlunosDeactivateGuard]
        }        
    ]} 
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})

export class AlunosRoutingModule {}