import { IBeneficiarioDto } from '../../interfaces/IBeneficiarioDto';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './beneficiario-lista.component.html',
  styleUrls: ['./beneficiario-lista.component.css'],
})
export class ListaBeneficiarioComponent {
  listaBeneficiarios: IBeneficiarioDto[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.listarTodos();
  }

  listarTodos() {
    this.http
      .get('https://localhost:7206/api/Beneficiario/')
      .subscribe((data) => {
        this.listaBeneficiarios = data as IBeneficiarioDto[];
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

  removerBeneficiario(id: number) {
    this.http
      .delete(`https://localhost:7206/api/Beneficiario/${id}`)
      .subscribe((data) => {
        this.listarTodos();
      });
  }

  atualizarBeneficiario(id: number) {
    this.router.navigate([`editarBeneficiario/${id}`]);
  }

  // adicionarAluno(){
  //   this.router.navigate([`editarAluno`]);
  // }
}
