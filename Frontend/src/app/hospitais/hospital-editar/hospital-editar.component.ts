import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IHospitalDto } from './../../interfaces/IHospitalDto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hospital-editar',
  templateUrl: './hospital-editar.component.html',
  styleUrls: ['./hospital-editar.component.css']
})
export class EditarHospitalComponent {
[x: string]: any;
  hospital!: IHospitalDto;
  idHospital!: number;
  route: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.route.paramMap.subscribe((params) => {
      this.idHospital = Number(params.get('id'));
    });
  }

  gOnInit(): void {
    this.hospital = {
      idHospital: this.idHospital ?? 0,
      nome: '',cnpj: '',
      endereco: '',
      telefone: '',
      cnes: '',
      ativo:false,
    };

    if (this.idHospital) {
      this.http
        .get(`https://localhost:7206/api/Hospital/${this.idHospital}`)
        .subscribe((data) => {
           this.hospital = data as IHospitalDto;
        });
    }
  }

  atualizarHospital(id:number) {
    this.http.put(
      `https://localhost:7206/api/Hospital/${id}`,
      this.hospital
   )

   .subscribe((data) => {
    this.router.navigate(['listaHospital']);
    this.mensagemErro = false;
    this.mensagemSucesso = true;
   }

   )}
}
