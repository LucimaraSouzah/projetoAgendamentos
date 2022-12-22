import { IBeneficiarioDto } from './IBeneficiarioDto';
import { IEspecialidadeDto } from './IEspecialidadeDto';
import { IHospitalDto } from './IHospitalDto';
import { IProfissionalDto } from './IProfissionalDto';

export interface IAgendamentoDto {
  idAgendamento: number;
  idHospital: number;
  idEspecialidade: number;
  idProfissional: number;
  dataHorarioInicio: Date;
  dataHorarioFim: Date;
  ativo: boolean;
  idBeneficiarioNavigation: IBeneficiarioDto;
  idEspecialidadeNavigation: IEspecialidadeDto;
  idHospitalNavigation: IHospitalDto;
  idProfissionalNavigation: IProfissionalDto;
}
