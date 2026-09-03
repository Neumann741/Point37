import { Component, inject, signal } from '@angular/core';
import { PagAdmService } from '../pag-adm-service';
import { Posts } from './posts';
import { form, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
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

  protected cadastrarProduto(event: SubmitEvent) {

    event.preventDefault();

    const produto = this.postModel();



    this.consumoService.cadatrarProdutoServive(produto).subscribe({
      next: (response) => {
        alert('Post cadastrado com id: ' + response.id);

        this.postModel.set({
          "nome": '',
          "descricao": '',
          "preco": 0,
          "urlImagem": ''
        });

        this.postForm().reset();
      },
      error: () => {
        alert('Algo deu errado');
      }
    })


  }
}