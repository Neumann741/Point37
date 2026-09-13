import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  produtos: any[] = [];

  adicionarProduto(produto: any) {
    const produtoExistente = this.produtos.find(
      (item) => item.id === produto.id,
    );

    if (produtoExistente) {
      produtoExistente.quantidade++;
      return;
    }

    const produtoDoCarrinho = {
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      urlImagem: produto.urlImagem,
      quantidade: 1,
    };

    this.produtos.push(produtoDoCarrinho);
  }

  diminuirQuantidade(index: number) {
    if (this.produtos[index].quantidade > 1) {
      this.produtos[index].quantidade--;
    }
  }

  aumentarQuantidade(index: number) {
    this.produtos[index].quantidade++;
  }

  removerProduto(index: number) {
    this.produtos.splice(index, 1);
  }

  calcularSubtotal(): number {
    return this.produtos.reduce(
      (total, produto) => total + produto.preco * produto.quantidade,
      0,
    );
  }
}
