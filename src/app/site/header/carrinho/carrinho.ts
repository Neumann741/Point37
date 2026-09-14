import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CarrinhoService } from './carrinho-service';
import { Router } from '@angular/router';
@Component({
  imports: [],
  selector: 'app-carrinho',
  standalone: true ,
  styleUrl: './carrinho.css',
  templateUrl: './carrinho.html',
})
export class Carrinho {
  @Output() fechar = new EventEmitter<void>();

  readonly carrinhoService = inject(CarrinhoService);

  get subtotal(): number {
    return this.carrinhoService.calcularSubtotal();
  }

  diminuirQuantidade(index: number) {
    this.carrinhoService.diminuirQuantidade(index);
  }

  aumentarQuantidade(index: number) {
    this.carrinhoService.aumentarQuantidade(index);
  }

  removerProduto(index: number) {
    this.carrinhoService.removerProduto(index);
  }
constructor(private router: Router) {}

   finalizarCompra(){
    if (this.carrinhoService.produtos.length === 0){
      return alert('O carrinho está vazio.')
    }

    this.router.navigate(['./finalizar-compra']);
  }
}

