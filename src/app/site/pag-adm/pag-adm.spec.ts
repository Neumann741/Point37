import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagAdm } from './pag-adm';

describe('PagAdm', () => {
  let component: PagAdm;
  let fixture: ComponentFixture<PagAdm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagAdm],
    }).compileComponents();

    fixture = TestBed.createComponent(PagAdm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
