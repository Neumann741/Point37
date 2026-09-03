import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostProduto } from './post-produto';

describe('PostProduto', () => {
  let component: PostProduto;
  let fixture: ComponentFixture<PostProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(PostProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
