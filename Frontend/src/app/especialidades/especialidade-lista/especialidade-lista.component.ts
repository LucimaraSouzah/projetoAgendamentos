import { IEspecialidadeDto } from '../../interfaces/IEspecialidadeDto';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidade-lista',
  templateUrl: './especialidade-lista.component.html',
  styleUrls: ['./especialidade-lista.component.css']
})
export class ListaEspecialidadeComponent {
  listaEspecialidades: IEspecialidadeDto[] = [];

  constructor(private http: HttpClient, private router: Router){
    this.listarEspecialidades()
  }

  listarEspecialidades(){
    this.http
    .get('https://localhost:7206/api/Especialidade/')
    .subscribe((data) => {
      this.listaEspecialidades = data as IEspecialidadeDto[];
    });
  }

}
/*btn html
(click)="atualizarEspecialidade(especialidade.idEspecialidade)"
(click)="removerEspecialidade(especialidade.idEspecialidade)"

removerEspecialidade(id: number){
  this.http
  .delete(`https://localhost:7206/api/Especialidade/${id}`)
  .subscribe((data) => {
    this.listarEspecialidades();
  });
}

atualizarEspecialidade(id: number) {
  this.router.navigate([`editarEspecialidade/${id}`]);
}
*/