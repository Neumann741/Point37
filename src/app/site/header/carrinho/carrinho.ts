import { Component, EventEmitter, Output } from '@angular/core';

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
      imagem: 'assets/tanqueray-transparente.png'
    },
    {
      nome: 'Outro produto',
      preco: 49.90,
      quantidade: 2,
      imagem: 'assets/bombay-transparente.png'

    }
  ];

  get subtotal(): number {
    return this.produtos.reduce(
      (total, produto) => total + produto.preco * produto.quantidade,
      0,
    );
  }

  diminuirQuantidade(index: number): void {
    if (this.produtos[index].quantidade > 1) {
      this.produtos[index].quantidade--;
    }
  }

  aumentarQuantidade(index: number): void {
    this.produtos[index].quantidade++;
  }

  removerProduto(index: number): void {
    this.produtos.splice(index, 1);
  }
}
