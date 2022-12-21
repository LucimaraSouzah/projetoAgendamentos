import { IBeneficiarioDto } from '../../interfaces/IBeneficiarioDto';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './beneficiario-lista.component.html',
  styleUrls: ['./beneficiario-lista.component.css'],
})
export class ListaBeneficiarioComponent {
  listaBeneficiarios: IBeneficiarioDto[] = [];

  imageCheck = '../../../assets/check.svg';
  imageNotCheck = '/assets/not.svg';

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

  removerBeneficiario(id: number) {
    this.http
      .delete(`https://localhost:7206/api/Beneficiario/${id}`)
      .subscribe((data) => {
        this.listarTodos();
      });
  }

  editarBeneficiario(id: number) {
    this.router.navigate([`editarBeneficiario/${id}`]);
  }
}
