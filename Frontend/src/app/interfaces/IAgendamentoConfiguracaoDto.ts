import { IEspecialidadeDto } from './IEspecialidadeDto';
import { IHospitalDto } from './IHospitalDto';
import { IProfissionalDto } from './IProfissionalDto';

export interface IAgendamentoConfiguracaoDto {
  idConfiguracao: number;
  idHospital: number;
  idEspecialidade: number;
  idProfissional: number;
  dataHorarioInicio: Date;
  dataHorarioFim: Date;
  idEspecialidadeNavigation: IEspecialidadeDto;
  idHospitalNavigation: IHospitalDto;
  idProfissionalNavigation: IProfissionalDto;
}
