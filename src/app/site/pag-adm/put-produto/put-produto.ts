import { Component, inject, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { PagAdmService } from '../pag-adm-service';
import { Posts } from '../post-produto/posts';
import { InterProd } from '../../pag-prod/inter-prod';

@Component({
  imports: [FormField],
  selector: 'app-put-produto',
  styleUrl: './put-produto.css',
  templateUrl: './put-produto.html',
})
export class PutProduto {

  protected readonly consumoService = inject(PagAdmService);

  protected readonly idProduto = signal<number | null>(null);

  protected readonly putModel = signal<Posts>({
    nome: '',
    descricao: '',
    preco: 0,
    urlImagem: ''
  });

  protected readonly putForm = form(this.putModel, (s) => {
    required(s.nome, { message: 'O nome é obrigatório' });
    required(s.descricao, { message: 'A descrição é obrigatória' });
    required(s.preco, { message: 'O preço é obrigatório' });
    required(s.urlImagem, { message: 'A url é obrigatória' });
  });

  selecionarProduto(produto: InterProd) {
    this.idProduto.set(produto.id);

    this.putModel.set({
      nome: produto.nome,
      descricao: produto.descricao,
      preco: Number(produto.preco),
      urlImagem: produto.urlImagem
    });
  }

  atualizarProduto(event: SubmitEvent) {
    event.preventDefault();

    const id = this.idProduto();
    const produto = this.putModel();

    if (id === null) {
      alert('Selecione um produto');
      return;
    }

    this.consumoService.atualizarProdutoService(id, produto).subscribe({
      next: () => {
        alert('Produto atualizado com sucesso');
        window.location.reload();
      },
      error: () => {
        alert('Algo deu errado');
      }
    });
  }
}
