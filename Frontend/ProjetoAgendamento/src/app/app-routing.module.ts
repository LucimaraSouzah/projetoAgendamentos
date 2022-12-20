import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiarioEditarComponent } from './beneficiario-editar/beneficiario-editar.component';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';
import { EspecialidadeComponent } from './especialidade/especialidade.component';
import { OpcoesComponent } from './opcoes/opcoes.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'beneficiario', component: BeneficiarioComponent },
  { path: 'especialidade', component: EspecialidadeComponent },
  { path: 'opcoes', component: OpcoesComponent },
  { path: 'editarBeneficiario', component: BeneficiarioEditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
