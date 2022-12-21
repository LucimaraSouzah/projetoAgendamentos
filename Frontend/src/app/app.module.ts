import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarBeneficiarioComponent } from './beneficiarios/beneficiario-cadastrar/beneficiario-cadastrar.component';
import { NavComponent } from './nav/nav.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { CommonModule } from '@angular/common';
import { CadastrarEspecialidadeComponent } from './especialidades/especialidade-cadastrar/especialidade-cadastrar.component';
import { HomeComponent } from './home/home.component';
import { ListaBeneficiarioComponent } from './beneficiarios/beneficiario-lista/beneficiario-lista.component';
import { BeneficiarioEditarComponent } from './beneficiarios/beneficiario-editar/beneficiario-editar.component';
import { ListaEspecialidadeComponent } from './especialidades/especialidade-lista/especialidade-lista.component';
import { EspecialidadeEditarComponent } from './especialidades/especialidade-editar/especialidade-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CadastrarBeneficiarioComponent,
    ListaBeneficiarioComponent,
    BeneficiarioEditarComponent,
    CadastrarEspecialidadeComponent,
    ListaEspecialidadeComponent,
    EspecialidadeEditarComponent,
    ProfissionalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
