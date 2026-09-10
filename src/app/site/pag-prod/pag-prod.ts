import { Component, inject, signal } from '@angular/core';
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

  produtoSelecionado = signal<any>(null);

  abrirProduto(produto: any){
    this.produtoSelecionado.set(produto);
    document.body.style.overflow = 'hidden';
  }

  fecharProduto(){
    this.produtoSelecionado.set(null);
    document.body.style.overflow = '';
  }


}
