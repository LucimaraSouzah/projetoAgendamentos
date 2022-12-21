import { IProfissionalDto } from './../../interfaces/IProfissionalDto';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissional-lista',
  templateUrl: './profissional-lista.component.html',
  styleUrls: ['./profissional-lista.component.css'],
})

export class ListaProfissionalComponent {
  listaProfissionais: IProfissionalDto[] = [];

  imageCheck = '../../../assets/check.svg';
  imageNotCheck = '/assets/not.svg';

  constructor(private http: HttpClient, private router: Router) {
    this.listarTodos();
  }

  listarTodos() {
    this.http
      .get('https://localhost:7206/api/Profissional/')
      .subscribe((data) => {
        this.listaProfissionais = data as IProfissionalDto[];
      });
  }

  removerProfissional(id: number) {
    this.http
      .delete(`https://localhost:7206/api/Profissional/${id}`)
      .subscribe((data) => {
        this.listarTodos();
      });
  }

  editarProfissional(id: number) {
    this.router.navigate([`editarProfissional/${id}`]);
  }
}
