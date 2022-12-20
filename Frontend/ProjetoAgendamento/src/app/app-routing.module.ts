import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';
import { EspecialidadeComponent } from './especialidade/especialidade.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'beneficiario', component: BeneficiarioComponent },
  { path: 'especialidade', component: EspecialidadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
