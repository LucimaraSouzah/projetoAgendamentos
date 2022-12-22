import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IHospitalDto } from './../../interfaces/IHospitalDto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hospital-lista',
  templateUrl: './hospital-lista.component.html',
  styleUrls: ['./hospital-lista.component.css']
})
export class ListaHospitalComponent {
listaHospitais: IHospitalDto[] = [];

  imageCheck = '/src/assets/check.svg';
  imageNotCheck = '/src/assets/not.svg';

  constructor(private http: HttpClient, private router: Router){
    this.listarHospitais()
  }


  listarHospitais(){
    this.http
    .get('https://localhost:7206/api/Especialidade/')
    .subscribe((data) => {
      this.listaHospitais = data as IHospitalDto[];
    });
  }

  removerHospital(id: number){
    this.http
    .delete(`https://localhost:7206/api/Hospital/${id}`)
    .subscribe((data) => {
      this.listarHospitais();
    });
  }

  editarHospital(id: number) {
    this.router.navigate([`editarHospital/${id}`]);
  }
}
