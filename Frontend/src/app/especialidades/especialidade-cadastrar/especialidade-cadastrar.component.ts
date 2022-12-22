import { IEspecialidadeDto } from '../../interfaces/IEspecialidadeDto';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-especialidade',
  templateUrl: './especialidade-cadastrar.component.html',
  styleUrls: ['./especialidade-cadastrar.component.css'],
})
export class CadastrarEspecialidadeComponent implements OnInit {
  especialidade!: IEspecialidadeDto;
  idEspecialidade!: number;

  listaEspecialidades: IEspecialidadeDto[] = [];

  mensagemSucesso = false;
  mensagemErro = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      this.idEspecialidade = Number(params.get('id'));
    });
  }

  ngOnInit(): void {
    this.especialidade = {
      idEspecialidade: this.idEspecialidade ?? 0,
      nome: '',
      descricao: '',
      ativo: false,
    };

    if (this.idEspecialidade) {
      this.http
        .get(`https://localhost:7206/api/Especialidade/${this.idEspecialidade}`)
        .subscribe((data) => {
          this.especialidade = data as IEspecialidadeDto;
        });
    }
  }

  cadastrar() {
    if (this.validarInformacoes()) {
      if (this.especialidade.idEspecialidade == 0) {
        this.http
          .post('https://localhost:7206/api/Especialidade', this.especialidade)
          .subscribe((data) => {
            this.router.navigate(['listaEspecialidade']);
            this.mensagemErro = false;
            this.mensagemSucesso = true;
          });
      } else {
        this.http
          .patch('https://localhost:7206/api/Especialidade', this.especialidade)
          .subscribe((data) => {
            this.router.navigate(['listaEspecialidade']);
          });
      }
    } else {
      console.log('Erro na validação');
      this.mensagemSucesso = false;
      this.mensagemErro = true;
    }
  }

  validarInformacoes(): boolean {
    if (this.especialidade.nome == '') {
      return false;
    }

    return true;
  }
}
