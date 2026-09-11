import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PutProduto } from './put-produto';

describe('PutProduto', () => {
  let component: PutProduto;
  let fixture: ComponentFixture<PutProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(PutProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
