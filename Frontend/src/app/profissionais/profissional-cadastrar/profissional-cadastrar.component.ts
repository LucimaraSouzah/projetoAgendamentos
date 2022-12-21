import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProfissionalDto } from '../../interfaces/IProfissionalDto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profissional-cadastrar',
  templateUrl: './profissional-cadastrar.component.html',
  styleUrls: ['./profissional-cadastrar.component.css'],
})
export class CadastrarProfissionalComponent implements OnInit {
  profissional!: IProfissionalDto;
  idProfissional!: number;

  listaProfissionais: IProfissionalDto[] = [];

  mensagemSucesso = false;
  mensagemErro = false;

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
      nome: '',
      telefone: '',
      endereco: '',
      ativo: false
    };

    if (this.idProfissional) {
      this.http
        .get(`https://localhost:7206/api/Profissional/${this.idProfissional}`)
        .subscribe((data) => {
          this.profissional = data as IProfissionalDto;
        });
    }
  }

  cadastrar() {
    if (this.validarInformacoes()) {
      if (this.profissional.idProfissional == 0) {
        this.http
          .post('https://localhost:7206/api/Profissional', this.profissional)
          .subscribe((data) => {
            this.router.navigate(['listaProfissional']);
            this.mensagemErro = false;
            this.mensagemSucesso = true;
          });
      } else {
        this.http
          .patch('https://localhost:7206/api/Profissional', this.profissional)
          .subscribe((data) => {
            this.router.navigate(['listaProfissional']);
            this.router.navigate(['listaProfissional']);
          });
      }
    } else {
      this.mensagemSucesso = false;
      this.mensagemErro = true;
    }
  }

  validarInformacoes(): boolean {
    if (
      this.profissional.nome == '' ||
      this.profissional.telefone == '' ||
      this.profissional.endereco == ''

    ) {
      return false;
    }
    return true;
  }
}
