import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetProd } from './det-prod';

describe('DetProd', () => {
  let component: DetProd;
  let fixture: ComponentFixture<DetProd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetProd],
    }).compileComponents();

    fixture = TestBed.createComponent(DetProd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
