import { IHospitalDto } from './../../interfaces/IHospitalDto';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-hospital-cadastrar',
  templateUrl: './hospital-cadastrar.component.html',
  styleUrls: ['./hospital-cadastrar.component.css']
})
export class CadastrarHospitalComponent implements OnInit{
  [x: string]: any;
  hospital!: IHospitalDto;
  idHospital!: number;

  listaHospitais: IHospitalDto[] = [];

  mensagemSucesso = false;
  mensagemErro = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      this.idHospital = Number(params.get('id'));
    });
  }

  ngOnInit(): void {
    this.hospital = {
      idHospital: this.idHospital ?? 0,
      nome: '',
      cnpj: '',
      endereco: '',
      telefone: '',
      cnes: '',
      ativo: false,
    };

    if (this.idHospital) {
      this.http
        .get(`https://localhost:7206/api/Hospital/${this.idHospital}`)
        .subscribe((data) => {
          this.hospital = data as IHospitalDto;
        });
    }
  }

  cadastrar() {
    if (this.validarInformacoes()) {
      if (this.hospital.idHospital = 0) {
        this.http
          .post('https://localhost:7206/api/Hospital', this.hospital)
          .subscribe((data) => {
            this.router.navigate(['listaHospital']);
            this.mensagemErro = false;
            this.mensagemSucesso = true;
          });
      } else {
        this.http
           .patch('https://localhost:7206/api/Hospital', this.hospital)
           .subscribe((data) => {
             this.router.navigate(['opcoes']);
           });
      }
    } else {
      this.mensagemSucesso = false;
      this.mensagemErro = true;
    }
  }

  validarInformacoes(): boolean {
    if (
      this.hospital.nome == ''
    ) {
      return false;
    }
    // VALIDAR COM REGEX
    return true;
  }
}

