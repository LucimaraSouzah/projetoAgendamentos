import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IEspecialidadeDto } from '../../interfaces/IEspecialidadeDto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-especialidade-editar',
  templateUrl: './especialidade-editar.component.html',
  styleUrls: ['./especialidade-editar.component.css']
})
export class EditarEspecialidadeComponent {
  especialidade!: IEspecialidadeDto;
  idEspecialidade!: number;

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
      .get(`https://localhost:7206/api/Especialidade${this.idEspecialidade}`)
      .subscribe((data) => {
        this.especialidade = data as IEspecialidadeDto;
      });
    }
  }

  atualizarEspecialidade(id: number) {
    this.http.put(
      `https://localhost:7206/api/Especialidade/${id}`,
      this.especialidade
    )
    .subscribe((data) => {
      this.router.navigate(['listarEspecialidades']);
      this.mensagemErro = false;
      this.mensagemSucesso = true;
    })
  }
}
