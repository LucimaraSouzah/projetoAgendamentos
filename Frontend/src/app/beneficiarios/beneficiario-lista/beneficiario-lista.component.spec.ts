import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBeneficiarioComponent } from './beneficiario-lista.component';

describe('OpcoesComponent', () => {
  let component: ListaBeneficiarioComponent;
  let fixture: ComponentFixture<ListaBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaBeneficiarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
