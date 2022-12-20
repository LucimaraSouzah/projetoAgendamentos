import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';
import { NavComponent } from './nav/nav.component';
import { ProfissionalComponent } from './profissional/profissional.component';

@NgModule({
  declarations: [
    AppComponent,
    BeneficiarioComponent,
    NavComponent,
    ProfissionalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
