import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiarioEditarComponent } from './beneficiarios/beneficiario-editar/beneficiario-editar.component';
import { BeneficiarioComponent } from './beneficiarios/beneficiario/beneficiario.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { EspecialidadeComponent } from './especialidade/especialidade.component';
import { OpcoesComponent } from './beneficiarios/beneficiario-opcoes/beneficiario-opcoes.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'beneficiario', component: BeneficiarioComponent },
  { path: 'profissional', component: ProfissionalComponent },
  { path: 'especialidade', component: EspecialidadeComponent },
  { path: 'opcoes', component: OpcoesComponent },
  { path: 'editarBeneficiario', component: BeneficiarioEditarComponent },
  { path: 'editarBeneficiario/:id', component: BeneficiarioEditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
