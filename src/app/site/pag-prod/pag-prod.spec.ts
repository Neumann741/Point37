import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagProd } from './pag-prod';

describe('PagProd', () => {
  let component: PagProd;
  let fixture: ComponentFixture<PagProd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagProd],
    }).compileComponents();

    fixture = TestBed.createComponent(PagProd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
