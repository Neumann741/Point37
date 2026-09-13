import { Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { PagAdmService } from '../pag-adm/pag-adm-service';
import { Carrossel } from "../carrossel/carrossel";
import { CarrinhoService } from '../header/carrinho/carrinho-service';


@Component({
  imports: [Carrossel],
  selector: 'app-pag-prod',
  styleUrl: './pag-prod.css',
  templateUrl: './pag-prod.html',
})
export class PagProd {

  protected readonly consumoService = inject(PagAdmService);
  readonly carrinhoService = inject(CarrinhoService);

  @ViewChild('detalheProduto') detalheProduto?: ElementRef<HTMLElement>;

  produtoSelecionado = signal<any>(null);

  comprar(produto: any) {
    this.carrinhoService.adicionarProduto(produto);
  }

  abrirProduto(produto: any) {
    this.produtoSelecionado.set(produto);

    requestAnimationFrame(() => {
      this.detalheProduto?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  }

  fecharProduto() {
    this.produtoSelecionado.set(null);
  }


}
