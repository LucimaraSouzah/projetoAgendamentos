import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEspecialidadeComponent } from './especialidade-editar.component';

describe('EspecialidadeEditarComponent', () => {
  let component: EditarEspecialidadeComponent;
  let fixture: ComponentFixture<EditarEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEspecialidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
