import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEspecialidadeComponent } from './especialidade-cadastrar.component';

describe('EspecialidadeComponent', () => {
  let component: CadastrarEspecialidadeComponent;
  let fixture: ComponentFixture<CadastrarEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEspecialidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
