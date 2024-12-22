import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoReferenciasComponent } from './acompanhamento-referencias.component';

describe('AcompanhamentoReferenciasComponent', () => {
  let component: AcompanhamentoReferenciasComponent;
  let fixture: ComponentFixture<AcompanhamentoReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcompanhamentoReferenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompanhamentoReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
