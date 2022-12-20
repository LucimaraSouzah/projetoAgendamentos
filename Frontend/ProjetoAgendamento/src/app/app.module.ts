import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';
import { NavComponent } from './nav/nav.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { CommonModule } from '@angular/common';
import { EspecialidadeComponent } from './especialidade/especialidade.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
>>>>>>> 6d51829dbc3886c2a007517d4d1a6dd58407b37e
import { OpcoesComponent } from './opcoes/opcoes.component';
import { BeneficiarioEditarComponent } from './beneficiario-editar/beneficiario-editar.component';
>>>>>>> 3a65940b59c4bde6bdcaba032f735addd34baf63

@NgModule({
  declarations: [
    AppComponent,
    BeneficiarioComponent,
    NavComponent,
    ProfissionalComponent,
    EspecialidadeComponent,
<<<<<<< HEAD
    HomeComponent,
    OpcoesComponent,
    BeneficiarioEditarComponent,
=======
<<<<<<< HEAD
    HomeComponent,
=======
>>>>>>> 6d51829dbc3886c2a007517d4d1a6dd58407b37e
    OpcoesComponent,
    BeneficiarioEditarComponent,
>>>>>>> 3a65940b59c4bde6bdcaba032f735addd34baf63
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
