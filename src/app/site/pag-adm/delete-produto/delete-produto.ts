import { Component, inject, signal } from '@angular/core';
import { PagAdmService } from '../pag-adm-service';
import { from } from 'rxjs';
import { PostDeleteRequest } from './post-delete-request';

@Component({
  imports: [],
  selector: 'app-delete-produto',
  styleUrl: './delete-produto.css',
  templateUrl: './delete-produto.html',
})
export class DeleteProduto {

  protected readonly consumoService = inject(PagAdmService);

  
  protected readonly postModel = signal<PostDeleteRequest>({
    id: null
  });

 
    deletarPost(id: number) {

    this.consumoService.deletarPost(id).subscribe({
        next: () => {
            alert('Produto deletado');
        },
        error: () => {
            alert('Algo deu errado');
        }
    });
}
}






