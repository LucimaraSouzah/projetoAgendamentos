import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHospitalComponent } from './hospital-lista.component';

describe('HospitalListaComponent', () => {
  let component: ListaHospitalComponent;
  let fixture: ComponentFixture<ListaHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
