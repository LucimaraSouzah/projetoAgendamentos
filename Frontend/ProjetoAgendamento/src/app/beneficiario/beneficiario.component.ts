import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IBeneficiarioDto } from '../interfaces/IBeneficiarioDto';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.css'],
})
export class BeneficiarioComponent implements OnInit {
  beneficiario!: IBeneficiarioDto;
  idBeneficiario!: number;

  listaBeneficiarios: IBeneficiarioDto[] = [];

  postar() {
    console.log('Post efetuado!');
  }

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

  salvar() {
    if (this.validarInformacoes()) {
      console.log(`Objeto para salvar: ${JSON.stringify(this.beneficiario)}`);

      if (this.beneficiario.idBeneficiario == 0) {
        // if(!this.aluno.aniversario || this.aluno.aniversario==''){
        //   console.log('erro na data');
        // this.aluno.aniversario = '0001-01-01';
        // }

        this.http
          .post('https://localhost:7206/api/Beneficiario', this.beneficiario)
          .subscribe((data) => {
            this.router.navigate(['listaalunos']);
          });
      } else {
        this.http
          .patch('https://localhost:7206/api/Beneficiario', this.beneficiario)
          .subscribe((data) => {
            this.router.navigate(['listaalunos']);
          });
      }
    } else {
      console.log('Erro na validação');
      // TRATAMENTO DE ERRO
      // ALERTA
      // BORDA VERMELHA
    }
  }

  validarInformacoes(): boolean {
    if (this.beneficiario.Nome == '') {
      return false;
    }

    // VALIDAR COM REGEX

    return true;
  }
}
