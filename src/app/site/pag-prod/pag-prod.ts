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

  @ViewChild('modalProduto') modalProduto?: ElementRef<HTMLDialogElement>;

  produtoSelecionado = signal<any>(null);

  abrirProduto(produto: any) {
    this.produtoSelecionado.set(produto);
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => this.modalProduto?.nativeElement.showModal());
  }

  fecharProduto() {
    const modal = this.modalProduto?.nativeElement;

    if (modal?.open) {
      modal.close();
    }

    this.produtoSelecionado.set(null);
    document.body.style.overflow = '';
  }


}
