import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBeneficiarioDto } from '../interfaces/IBeneficiarioDto';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css']
})
export class AgendamentosComponent {
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
        console.log(this.listaBeneficiarios)
      });
  }
}
