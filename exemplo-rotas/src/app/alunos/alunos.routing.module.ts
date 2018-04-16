import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';

const alunosRoutes = [
    {path: 'alunos', component: AlunosComponent, children : [
        {path: 'novo', component: AlunoFormularioComponent},
        {path: ':id', component: AlunoDetalheComponent},
        {path: ':id/editar', component: AlunoFormularioComponent}
        
    ]},  
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})

export class AlunosRoutingModule {}