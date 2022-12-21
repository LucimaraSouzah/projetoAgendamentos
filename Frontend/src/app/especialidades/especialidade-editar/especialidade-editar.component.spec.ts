import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeEditarComponent } from './especialidade-editar.component';

describe('EspecialidadeEditarComponent', () => {
  let component: EspecialidadeEditarComponent;
  let fixture: ComponentFixture<EspecialidadeEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadeEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
