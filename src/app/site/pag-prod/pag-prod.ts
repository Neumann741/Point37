import { Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { PagAdmService } from '../pag-adm/pag-adm-service';
import { Carrossel } from "../carrossel/carrossel";


@Component({
  imports: [Carrossel],
  selector: 'app-pag-prod',
  styleUrl: './pag-prod.css',
  templateUrl: './pag-prod.html',
})
export class PagProd {

  protected readonly consumoService = inject(PagAdmService);

  @ViewChild('detalheProduto') detalheProduto?: ElementRef<HTMLElement>;

  produtoSelecionado = signal<any>(null);

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
