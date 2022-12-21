import { ProfissionalEditarComponent } from './profissionais/profissional-editar/profissional-editar.component';
import { EspecialidadeEditarComponent } from './especialidades/especialidade-editar/especialidade-editar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Rotas
import { HomeComponent } from './home/home.component';

import { BeneficiarioEditarComponent } from './beneficiarios/beneficiario-editar/beneficiario-editar.component';
import { CadastrarBeneficiarioComponent } from './beneficiarios/beneficiario-cadastrar/beneficiario-cadastrar.component';
import { ListaBeneficiarioComponent } from './beneficiarios/beneficiario-lista/beneficiario-lista.component';

import { CadastrarProfissionalComponent } from './profissionais/profissional-cadastrar/profissional-cadastrar.component';
import { ListaProfissionalComponent } from './profissionais/profissional-lista/profissional-lista.component';

import { CadastrarEspecialidadeComponent } from './especialidades/especialidade-cadastrar/especialidade-cadastrar.component';
import { ListaEspecialidadeComponent } from './especialidades/especialidade-lista/especialidade-lista.component';

const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'cadastrarBeneficiario', component: CadastrarBeneficiarioComponent },
  { path: 'listaBeneficiario', component: ListaBeneficiarioComponent},
  { path: 'editarBeneficiario', component: BeneficiarioEditarComponent },
  { path: 'editarBeneficiario/:id', component: BeneficiarioEditarComponent },

  { path: 'cadastrarProfissional', component: CadastrarProfissionalComponent},
  { path: 'listaProfissional', component: ListaProfissionalComponent },
  { path: 'editarProfissional', component: ProfissionalEditarComponent},
  { path: 'editarProfissional/:id', component: ProfissionalEditarComponent},

  { path: 'cadastrarEspecialidade', component: CadastrarEspecialidadeComponent },
  { path: 'listaEspecialidade', component: ListaEspecialidadeComponent },
  { path: 'editarEspecialidade', component: EspecialidadeEditarComponent },
  { path: 'editarEspecialidade/:id', component: EspecialidadeEditarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
