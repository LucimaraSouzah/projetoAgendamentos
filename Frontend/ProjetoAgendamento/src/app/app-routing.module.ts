import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';
import { EspecialidadeComponent } from './especialidade/especialidade.component';
import { OpcoesComponent } from './opcoes/opcoes.component';

const routes: Routes = [
  { path: 'beneficiario', component: BeneficiarioComponent },
  { path: 'especialidade', component: EspecialidadeComponent },
  { path: 'opcoes', component: OpcoesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
