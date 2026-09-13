import { Component } from '@angular/core';
import { PostProduto } from "./post-produto/post-produto";
import { DeleteProduto } from "./delete-produto/delete-produto";
import { PutProduto } from "./put-produto/put-produto";

@Component({
  imports: [PostProduto, DeleteProduto, PutProduto],
  selector: 'app-pag-adm',
  styleUrl: './pag-adm.css',
  templateUrl: './pag-adm.html',
})
export class PagAdm {}
