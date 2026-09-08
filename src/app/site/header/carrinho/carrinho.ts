import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-carrinho',
  standalone: true ,
  styleUrl: './carrinho.css',
  templateUrl: './carrinho.html',
})
export class Carrinho {

  @Output() fechar = new EventEmitter<void>();

  produtos = [
    {
      nome: 'Produto Exemplo',
      preco: 29.90,
      quantidade: 1,
      imagem: 'https://via.place.holder.cpm/80'
    },
    {
      nome: 'Outro produto',
      preco: 49.90,
      quantidade: 2,
      imagem: 'https://via.placeholder.com/80'

    }
  ];
}
