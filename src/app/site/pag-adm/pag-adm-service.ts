import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Posts } from './post-produto/posts'
import { PostResponse } from './post-produto/post-response';
import { InterProd } from '../pag-prod/inter-prod';

@Service()
export class PagAdmService {

    private readonly apiUrl = 'http://localhost:8080/produtos';

    private readonly httpClient = inject(HttpClient);

    cadatrarProdutoServive(postCadastrado: Posts) {
        return this.httpClient.post<PostResponse>(this.apiUrl, postCadastrado);
    }


    readonly postsDetails = httpResource<InterProd[]>(
        () => this.apiUrl,
        { defaultValue: [] }
    )


}
