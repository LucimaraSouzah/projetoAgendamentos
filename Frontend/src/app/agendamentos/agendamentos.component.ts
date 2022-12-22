import { IProfissionalDto } from './../interfaces/IProfissionalDto';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBeneficiarioDto } from '../interfaces/IBeneficiarioDto';
import { IEspecialidadeDto } from '../interfaces/IEspecialidadeDto';
import { IHospitalDto } from '../interfaces/IHospitalDto';
import { IAgendamentoConfiguracaoDto } from '../interfaces/IAgendamentoConfiguracaoDto';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css'],
})
export class AgendamentosComponent {
  listaBeneficiarios: IBeneficiarioDto[] = [];
  listaEspecialidades: IEspecialidadeDto[] = [];
  listaHospitais: IHospitalDto[] = [];
  listaProfissionais: IProfissionalDto[] = [];

  imageCheck = '../../../assets/check.svg';
  imageNotCheck = '/assets/not.svg';

  constructor(private http: HttpClient, private router: Router) {
    this.listarTodos();
    this.listarEspecialidades();
    this.listarHospitais();
    this.listarProfissionais();
  }

  listarTodos() {
    this.http
      .get('https://localhost:7206/api/Beneficiario/')
      .subscribe((data) => {
        this.listaBeneficiarios = data as IBeneficiarioDto[];
      });
  }

  listarEspecialidades() {
    this.http
      .get('https://localhost:7206/api/Especialidade/')
      .subscribe((data) => {
        this.listaEspecialidades = data as IEspecialidadeDto[];
      });
  }

  listarHospitais() {
    this.http.get('https://localhost:7206/api/Hospital/').subscribe((data) => {
      this.listaHospitais = data as IHospitalDto[];
    });
  }

  listarProfissionais() {
    this.http
      .get('https://localhost:7206/api/Profissional/')
      .subscribe((data) => {
        this.listaProfissionais = data as IProfissionalDto[];
      });
  }
}
