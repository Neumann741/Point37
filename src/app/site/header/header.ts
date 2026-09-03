import { Component, signal } from '@angular/core';
import { Carrinho } from './carrinho/carrinho';


@Component({
  imports: [Carrinho],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

   statusCarrinho = signal<boolean>(false)

   alteraCarrinho() {
       this.statusCarrinho.update(status => !status);
   }

   fechaCarrinho() {
       this.statusCarrinho.set(false);
   }

}
