import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProfissionalComponent } from './profissional-editar.component';

describe('BeneficiarioEditarComponent', () => {
  let component: EditarProfissionalComponent;
  let fixture: ComponentFixture<EditarProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProfissionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
