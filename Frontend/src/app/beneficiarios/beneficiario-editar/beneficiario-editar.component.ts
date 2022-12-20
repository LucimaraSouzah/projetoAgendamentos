import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBeneficiarioDto } from '../../interfaces/IBeneficiarioDto';

@Component({
  selector: 'app-beneficiario-editar',
  templateUrl: './beneficiario-editar.component.html',
  styleUrls: ['./beneficiario-editar.component.css'],
})
export class BeneficiarioEditarComponent {
  beneficiario!: IBeneficiarioDto;
  idBeneficiario!: number;

  mensagemSucesso = false;
  mensagemErro = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      this.idBeneficiario = Number(params.get('id'));
    });
  }

  ngOnInit(): void {
    this.beneficiario = {
      idBeneficiario: this.idBeneficiario ?? 0,
      nome: '',
      cpf: '',
      telefone: '',
      endereco: '',
      numeroCarteirinha: '',
      ativo: false,
      email: '',
      senha: '',
    };

    if (this.idBeneficiario) {
      this.http
        .get(`https://localhost:7206/api/Beneficiario/${this.idBeneficiario}`)
        .subscribe((data) => {
          this.beneficiario = data as IBeneficiarioDto;
        });
    }
  }

  atualizarBeneficiario(id:number) {
    this.http.put(
      `https://localhost:7206/api/Beneficiario/${id}`,
      this.beneficiario
    )
    .subscribe((data) => {
      this.router.navigate(['opcoes']);
      this.mensagemErro = false;
      this.mensagemSucesso = true;
    }
    )}
}
