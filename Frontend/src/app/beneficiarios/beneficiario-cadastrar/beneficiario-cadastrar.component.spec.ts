import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarBeneficiarioComponent } from './beneficiario-cadastrar.component';

describe('BeneficiarioComponent', () => {
  let component: CadastrarBeneficiarioComponent;
  let fixture: ComponentFixture<CadastrarBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarBeneficiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
