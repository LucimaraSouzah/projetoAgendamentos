import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Rotas
import { HomeComponent } from './home/home.component';

import { ListaBeneficiarioComponent } from './beneficiarios/beneficiario-lista/beneficiario-lista.component';
import { EditarBeneficiarioComponent } from './beneficiarios/beneficiario-editar/beneficiario-editar.component';
import { CadastrarBeneficiarioComponent } from './beneficiarios/beneficiario-cadastrar/beneficiario-cadastrar.component';

import { ListaProfissionalComponent } from './profissionais/profissional-lista/profissional-lista.component';
import { EditarProfissionalComponent } from './profissionais/profissional-editar/profissional-editar.component';
import { CadastrarProfissionalComponent } from './profissionais/profissional-cadastrar/profissional-cadastrar.component';

import { ListaEspecialidadeComponent } from './especialidades/especialidade-lista/especialidade-lista.component';
import { CadastrarEspecialidadeComponent } from './especialidades/especialidade-cadastrar/especialidade-cadastrar.component';
import { EditarEspecialidadeComponent } from './especialidades/especialidade-editar/especialidade-editar.component';

import { CadastrarHospitalComponent } from './hospitais/hospital-cadastrar/hospital-cadastrar.component';

const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'cadastrarBeneficiario', component: CadastrarBeneficiarioComponent },
  { path: 'listaBeneficiario', component: ListaBeneficiarioComponent},
  { path: 'editarBeneficiario', component: EditarBeneficiarioComponent },
  { path: 'editarBeneficiario/:id', component: EditarBeneficiarioComponent },

  { path: 'cadastrarProfissional', component: CadastrarProfissionalComponent},
  { path: 'listaProfissional', component: ListaProfissionalComponent },
  { path: 'editarProfissional', component: EditarProfissionalComponent},
  { path: 'editarProfissional/:id', component: EditarProfissionalComponent},

  { path: 'cadastrarEspecialidade', component: CadastrarEspecialidadeComponent },
  { path: 'listaEspecialidade', component: ListaEspecialidadeComponent },
  { path: 'editarEspecialidade', component: EditarEspecialidadeComponent },
  { path: 'editarEspecialidade/:id', component: EditarEspecialidadeComponent },

  { path: 'cadastrarHospital', component: CadastrarHospitalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
