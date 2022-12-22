import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosConfiguracaoComponent } from './agendamentos-configuracao.component';

describe('AgendamentosConfiguracaoComponent', () => {
  let component: AgendamentosConfiguracaoComponent;
  let fixture: ComponentFixture<AgendamentosConfiguracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendamentosConfiguracaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgendamentosConfiguracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
