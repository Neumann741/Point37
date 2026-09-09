import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BebidasClassicas } from './bebidas-classicas';

describe('BebidasClassicas', () => {
  let component: BebidasClassicas;
  let fixture: ComponentFixture<BebidasClassicas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BebidasClassicas],
    }).compileComponents();

    fixture = TestBed.createComponent(BebidasClassicas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
