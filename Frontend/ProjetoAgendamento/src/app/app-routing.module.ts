import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { EspecialidadeComponent } from './especialidade/especialidade.component';

const routes: Routes = [
  { path: 'beneficiario', component: BeneficiarioComponent },
  { path: 'profissional', component: ProfissionalComponent },
  { path: 'especialidade', component: EspecialidadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
