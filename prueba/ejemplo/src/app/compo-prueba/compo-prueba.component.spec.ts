import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoPruebaComponent } from './compo-prueba.component';

describe('CompoPruebaComponent', () => {
  let component: CompoPruebaComponent;
  let fixture: ComponentFixture<CompoPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoPruebaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
