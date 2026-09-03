import { Component, inject, signal } from '@angular/core';
import { PagAdmService } from '../pag-adm-service';
import { Posts } from './posts';
import { form } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'app-post-produto',
  styleUrl: './post-produto.css',
  templateUrl: './post-produto.html',
})
export class PostProduto {


protected readonly consumoService = inject(PagAdmService);

protected readonly postModel = signal<Posts>({
  "nome": '',
  "descricao": '',
  "preco": 0,
  "urlImagem": ''
})

protected readonly postForm = form(this.postModel);



}
