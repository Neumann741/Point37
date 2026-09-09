import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteProduto } from './delete-produto';

describe('DeleteProduto', () => {
  let component: DeleteProduto;
  let fixture: ComponentFixture<DeleteProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
