import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpnfComponent } from './opnf.component';

describe('OpnfComponent', () => {
  let component: OpnfComponent;
  let fixture: ComponentFixture<OpnfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpnfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
