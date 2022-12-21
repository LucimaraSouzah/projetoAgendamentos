import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeOpcoesComponent } from './especialidade-lista.component';

describe('EspecialidadeOpcoesComponent', () => {
  let component: EspecialidadeOpcoesComponent;
  let fixture: ComponentFixture<EspecialidadeOpcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadeOpcoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadeOpcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
