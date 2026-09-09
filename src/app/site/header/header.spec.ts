import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close the cart', () => {
    const cartButton: HTMLButtonElement = fixture.nativeElement.querySelector('.cart-button');

    cartButton.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-carrinho')).toBeTruthy();

    const closeButton: HTMLButtonElement = fixture.nativeElement.querySelector('.btn-fechar');
    closeButton.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-carrinho')).toBeNull();
  });
});
