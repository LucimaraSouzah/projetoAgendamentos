import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarioComponent } from './beneficiario-cadastrar.component';

describe('BeneficiarioComponent', () => {
  let component: BeneficiarioComponent;
  let fixture: ComponentFixture<BeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
