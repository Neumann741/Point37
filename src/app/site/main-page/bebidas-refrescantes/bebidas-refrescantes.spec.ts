import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BebidasRefrescantes } from './bebidas-refrescantes';

describe('BebidasRefrescantes', () => {
  let component: BebidasRefrescantes;
  let fixture: ComponentFixture<BebidasRefrescantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BebidasRefrescantes],
    }).compileComponents();

    fixture = TestBed.createComponent(BebidasRefrescantes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
