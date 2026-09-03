import { Component } from '@angular/core';
import { PostProduto } from "./post-produto/post-produto";

@Component({
  imports: [PostProduto],
  selector: 'app-pag-adm',
  styleUrl: './pag-adm.css',
  templateUrl: './pag-adm.html',
})
export class PagAdm {}
