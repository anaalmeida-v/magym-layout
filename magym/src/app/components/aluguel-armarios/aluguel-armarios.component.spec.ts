import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelArmariosComponent } from './aluguel-armarios.component';

describe('AluguelArmariosComponent', () => {
  let component: AluguelArmariosComponent;
  let fixture: ComponentFixture<AluguelArmariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluguelArmariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AluguelArmariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
