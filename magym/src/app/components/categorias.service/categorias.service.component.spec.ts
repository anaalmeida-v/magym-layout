import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasServiceComponent } from './categorias.service.component';

describe('CategoriasServiceComponent', () => {
  let component: CategoriasServiceComponent;
  let fixture: ComponentFixture<CategoriasServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
