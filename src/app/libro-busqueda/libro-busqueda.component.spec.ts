import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroBusquedaComponent } from './libro-busqueda.component';

describe('LibroBusquedaComponent', () => {
  let component: LibroBusquedaComponent;
  let fixture: ComponentFixture<LibroBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
