import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfissionalComponent } from './profissional-lista.component';

describe('OpcoesComponent', () => {
  let component: ListaProfissionalComponent;
  let fixture: ComponentFixture<ListaProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProfissionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
