import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IProfissionalDto } from '../interfaces/IProfissionalDto';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css'],
})
export class ProfissionalComponent implements OnInit {
  profissional!: IProfissionalDto;
  idProfissional!: number;

  listaProfissionais: IProfissionalDto[] = [];

  postar() {
    console.log('Post efetuado!');
  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      this.idProfissional = Number(params.get('id'));
    });
  }

  ngOnInit(): void {
    this.profissional = {
      idProfissional: this.idProfissional ?? 0,
      Nome: '',
      Telefone: '',
      Endereco: '',
    };

    if (this.idProfissional) {
      this.http
        .get(`https://localhost:7206/api/Profissional/${this.idProfissional}`)
        .subscribe((data) => {
          this.profissional = data as IProfissionalDto;
        });
    }
  }

  salvar() {
    if (this.validarInformacoes()) {
      console.log(`Objeto para salvar: ${JSON.stringify(this.profissional)}`);

      if (this.profissional.idProfissional == 0) {


        this.http
          .post('https://localhost:7206/api/Profissional', this.profissional)
          .subscribe((data) => {
            this.router.navigate(['listaalunos']);
          });
      } else {
        this.http
          .patch('https://localhost:7206/api/Profissional', this.profissional)
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
    if (this.profissional.Nome == '') {
      return false;
    }

    // VALIDAR COM REGEX

    return true;
  }
}
