import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProfissionalComponent } from './profissional-cadastrar.component';

describe('ProfissionalComponent', () => {
  let component: CadastrarProfissionalComponent;
  let fixture: ComponentFixture<CadastrarProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarProfissionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
