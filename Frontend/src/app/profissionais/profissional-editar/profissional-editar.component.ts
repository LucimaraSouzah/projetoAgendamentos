import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProfissionalDto } from '../../interfaces/IProfissionalDto';

@Component({
  selector: 'app-profissional-editar',
  templateUrl: './profissional-editar.component.html',
  styleUrls: ['./profissional-editar.component.css'],
})
export class EditarProfissionalComponent {
  profissional!: IProfissionalDto;
  idProfissional!: number;

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
      ativo: false,
    };

    if (this.idProfissional) {
      this.http
        .get(`https://localhost:7206/api/Profissional/${this.idProfissional}`)
        .subscribe((data) => {
          this.profissional = data as IProfissionalDto;
        });
    }
  }

  atualizarProfissional(id:number) {
    this.http.put(
      `https://localhost:7206/api/Profissional/${id}`,
      this.profissional
    )
    .subscribe((data) => {
      this.router.navigate(['listaProfissional']);
      this.mensagemErro = false;
      this.mensagemSucesso = true;
    }
    )}
}
