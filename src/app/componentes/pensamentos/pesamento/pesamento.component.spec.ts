import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesamentoComponent } from './pesamento.component';

describe('PesamentoComponent', () => {
  let component: PesamentoComponent;
  let fixture: ComponentFixture<PesamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
