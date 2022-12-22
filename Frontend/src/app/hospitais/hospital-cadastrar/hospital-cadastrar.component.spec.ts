import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarHospitalComponent } from './hospital-cadastrar.component';

describe('CadastrarHospitalComponent', () => {
  let component: CadastrarHospitalComponent;
  let fixture: ComponentFixture<CadastrarHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarHospitalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
