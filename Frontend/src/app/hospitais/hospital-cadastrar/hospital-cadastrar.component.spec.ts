import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalCadastrarComponent } from './hospital-cadastrar.component';

describe('HospitalCadastrarComponent', () => {
  let component: HospitalCadastrarComponent;
  let fixture: ComponentFixture<HospitalCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
