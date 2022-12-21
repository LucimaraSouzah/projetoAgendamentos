import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBeneficiarioComponent } from './beneficiario-editar.component';

describe('BeneficiarioEditarComponent', () => {
  let component: EditarBeneficiarioComponent;
  let fixture: ComponentFixture<EditarBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBeneficiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
