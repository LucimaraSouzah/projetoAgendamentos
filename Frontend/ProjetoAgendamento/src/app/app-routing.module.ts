import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';
import { ProfissionalComponent } from './profissional/profissional.component';

const routes: Routes = [
  { path: 'beneficiario', component: BeneficiarioComponent },
  { path: 'profissional', component: ProfissionalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
