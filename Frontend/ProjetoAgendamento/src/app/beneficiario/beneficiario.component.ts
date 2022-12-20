import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IBeneficiarioDto } from '../interfaces/IBeneficiarioDto';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.css'],
})
export class BeneficiarioComponent implements OnInit {
  beneficiario!: IBeneficiarioDto;
  idBeneficiario!: number;

  listaBeneficiarios: IBeneficiarioDto[] = [];

  mensagemSucesso = false;
  mensagemErro = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      this.idBeneficiario = Number(params.get('id'));
    });
  }

  ngOnInit(): void {
    this.beneficiario = {
      idBeneficiario: this.idBeneficiario ?? 0,
      Nome: '',
      Cpf: '',
      Telefone: '',
      Endereco: '',
      NumeroCarteirinha: '',
      Ativo: false,
      Email: '',
      Senha: '',
    };

    if (this.idBeneficiario) {
      this.http
        .get(`https://localhost:7206/api/Beneficiario/${this.idBeneficiario}`)
        .subscribe((data) => {
          this.beneficiario = data as IBeneficiarioDto;
        });
    }
  }

  cadastrar() {
    if (this.validarInformacoes()) {
      if (this.beneficiario.idBeneficiario == 0) {
        this.http
          .post('https://localhost:7206/api/Beneficiario', this.beneficiario)
          .subscribe((data) => {
            this.router.navigate(['listabeneficiarios']);
            this.mensagemErro = false;
            this.mensagemSucesso = true;
          });
      } else {
        this.http
          .patch('https://localhost:7206/api/Beneficiario', this.beneficiario)
          .subscribe((data) => {
            this.router.navigate(['listabeneficiarios']);
          });
      }
    } else {
      this.mensagemSucesso = false;
      this.mensagemErro = true;
    }
  }

  validarInformacoes(): boolean {
    if (
      this.beneficiario.Nome == '' ||
      this.beneficiario.Cpf == '' ||
      this.beneficiario.NumeroCarteirinha == '' ||
      this.beneficiario.Email == '' ||
      this.beneficiario.Senha == ''
    ) {
      return false;
    }
    // VALIDAR COM REGEX
    return true;
  }
}
