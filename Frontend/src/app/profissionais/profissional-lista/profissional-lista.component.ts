import { IProfissionalDto } from './../../interfaces/IProfissionalDto';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-profissional-lista',
  templateUrl: './profissional-lista.component.html',
  styleUrls: ['./profissional-lista.component.css'],
})
export class ListaProfissionalComponent {
  listaProfissional: IProfissionalDto[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.listarTodos();
  }

  listarTodos() {
    this.http
      .get('https://localhost:7206/api/Profissional/')
      .subscribe((data) => {
        this.listaProfissional = data as IProfissionalDto[];
      });
  }

  // detalhar(id: number) {
  //   this.telaParaApresentar = 'detalhe';

  //   for (let i = 0; i < this.listaAlunos.length; i++) {
  //     if (id == this.listaAlunos[i].id) {
  //       this.alunoSelecionado = this.listaAlunos[i];
  //       break;
  //     }
  //   }
  // }

  // fecharDetalhes = () => {
  //   this.telaParaApresentar = 'lista';
  // }

  removerProfissional(id: number) {
    this.http
      .delete(`https://localhost:7206/api/Profissional/${id}`)
      .subscribe((data) => {
        this.listarTodos();
      });
  }

  atualizarProfissional(id: number) {
    this.router.navigate([`editarProfissional/${id}`]);
  }

  // adicionarAluno(){
  //   this.router.navigate([`editarAluno`]);
  // }
}
