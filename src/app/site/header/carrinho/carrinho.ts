import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-carrinho',
  styleUrl: './carrinho.css',
  templateUrl: './carrinho.html',
})
export class Carrinho {
  fechar = output<void>();
}
