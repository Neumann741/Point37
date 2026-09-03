import { Component, inject, signal } from '@angular/core';
import { Carrinho } from './carrinho/carrinho';
import { RouterLink } from '@angular/router';



@Component({
  imports: [Carrinho, RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

   statusCarrinho = signal<boolean>(false)

   alteraCarrinho() {
       this.statusCarrinho.update(status => !status);
   }

}
