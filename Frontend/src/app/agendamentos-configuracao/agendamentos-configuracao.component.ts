import { IAgendamentoConfiguracaoDto } from './../interfaces/IAgendamentoConfiguracaoDto';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBeneficiarioDto } from '../interfaces/IBeneficiarioDto';
import { IEspecialidadeDto } from '../interfaces/IEspecialidadeDto';
import { IHospitalDto } from '../interfaces/IHospitalDto';
import { IProfissionalDto } from '../interfaces/IProfissionalDto';

@Component({
  selector: 'app-agendamentos-configuracao',
  templateUrl: './agendamentos-configuracao.component.html',
  styleUrls: ['./agendamentos-configuracao.component.css']
})
export class AgendamentosConfiguracaoComponent {
  listaBeneficiarios: IBeneficiarioDto[] = [];
  listaEspecialidades: IEspecialidadeDto[] = [];
  listaHospitais: IHospitalDto[] = [];
  listaProfissionais: IProfissionalDto[] = [];

  agendamentoConfiguracao!: IAgendamentoConfiguracaoDto;
  idAgendamentoConfiguracao!: number;


  mensagemSucesso = false;
  mensagemErro = false;

  ngOnInit(): void {
    this.agendamentoConfiguracao = {
      idConfiguracao: this.idAgendamentoConfiguracao ?? 0,
      idHospital: 0,
      idEspecialidade: 0,
      idProfissional: 0,
      dataHorarioInicio: new Date(),
      dataHorarioFim: new Date(),
      idEspecialidadeNavigation: {
        idEspecialidade: 0,
        nome: '',
        descricao: '',
        ativo: false,
      },
      idHospitalNavigation: {
        idHospital: 0,
        nome: '',
        cnpj: '',
        endereco: '',
        telefone: '',
        cnes: '',
        ativo: false
      },
      idProfissionalNavigation: {
        idProfissional: 0,
        nome: '',
        telefone: '',
        endereco: '',
        ativo: false
      }
    };

    if (this.idAgendamentoConfiguracao) {
      this.http
        .get(`https://localhost:7206/api/Beneficiario/${this.idAgendamentoConfiguracao}`)
        .subscribe((data) => {
          this.agendamentoConfiguracao = data as IAgendamentoConfiguracaoDto;
          console.log(this.agendamentoConfiguracao)
        });
    }
  }

  cadastrar() {
    if (this.validarInformacoes()) {
      if (this.agendamentoConfiguracao.idConfiguracao == 0) {
        this.http
          .post('https://localhost:7206/api/AgendamentoConfiguracao', this.agendamentoConfiguracao)
          .subscribe((data) => {
            console.log(data)
            this.router.navigate(['listaBeneficiario']);
            this.mensagemErro = false;
            this.mensagemSucesso = true;
          });
      } else {
        this.http
          .patch('https://localhost:7206/api/AgendamentoConfiguracao', this.agendamentoConfiguracao)
          .subscribe((data) => {
            this.router.navigate(['listaBeneficiario']);
          });
      }
    } else {
      this.mensagemSucesso = false;
      this.mensagemErro = true;
    }
  }

  validarInformacoes(): boolean {
    // if (
    //   this.beneficiario.nome == '' ||
    //   this.beneficiario.cpf == '' ||
    //   this.beneficiario.numeroCarteirinha == '' ||
    //   this.beneficiario.email == '' ||
    //   this.beneficiario.senha == ''
    // ) {
    //   return false;
    // }
    return true;
  }



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

  listarEspecialidades(){
    this.http
    .get('https://localhost:7206/api/Especialidade/')
    .subscribe((data) => {
      this.listaEspecialidades = data as IEspecialidadeDto[];
    });
  }

  listarHospitais(){
    this.http
    .get('https://localhost:7206/api/Hospital/')
    .subscribe((data) => {
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
