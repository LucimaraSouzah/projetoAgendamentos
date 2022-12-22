import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

import { AgendamentosComponent } from './agendamentos/agendamentos.component';

import { ListaBeneficiarioComponent } from './beneficiarios/beneficiario-lista/beneficiario-lista.component';
import { CadastrarBeneficiarioComponent } from './beneficiarios/beneficiario-cadastrar/beneficiario-cadastrar.component';
import { EditarBeneficiarioComponent } from './beneficiarios/beneficiario-editar/beneficiario-editar.component';

import { ListaEspecialidadeComponent } from './especialidades/especialidade-lista/especialidade-lista.component';
import { CadastrarEspecialidadeComponent } from './especialidades/especialidade-cadastrar/especialidade-cadastrar.component';
import { EditarEspecialidadeComponent } from './especialidades/especialidade-editar/especialidade-editar.component';

import { ListaProfissionalComponent } from './profissionais/profissional-lista/profissional-lista.component';
import { CadastrarProfissionalComponent } from './profissionais/profissional-cadastrar/profissional-cadastrar.component';
import { EditarProfissionalComponent } from './profissionais/profissional-editar/profissional-editar.component';

import { ListaHospitalComponent } from './hospitais/hospital-lista/hospital-lista.component';
import { EditarHospitalComponent } from './hospitais/hospital-editar/hospital-editar.component';
import { CadastrarHospitalComponent } from './hospitais/hospital-cadastrar/hospital-cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ListaBeneficiarioComponent,
    CadastrarBeneficiarioComponent,
    EditarBeneficiarioComponent,
    ListaEspecialidadeComponent,
    CadastrarEspecialidadeComponent,
    EditarEspecialidadeComponent,
    CadastrarProfissionalComponent,
    EditarProfissionalComponent,
    ListaProfissionalComponent,
    ListaHospitalComponent,
    CadastrarHospitalComponent,
    EditarHospitalComponent,
    AgendamentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
