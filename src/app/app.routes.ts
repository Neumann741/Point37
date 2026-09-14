import { Routes } from '@angular/router';
import { PagAdm } from './site/pag-adm/pag-adm';
import { PagProd } from './site/pag-prod/pag-prod';
import { Login } from './site/login/login';
import { LayoutPublico } from './site/layout-publico/layout-publico';
import { FinalizarCompra } from './site/header/finalizar-compra/finalizar-compra';
import { Carrinho } from './site/header/carrinho/carrinho';

export const routes: Routes = [

{ path: '', component: LayoutPublico,
        children: [
            { path: 'pag-prod', component: PagProd },
            { path: 'pag-adm', component: PagAdm },
            { path: '', redirectTo: 'main-page', pathMatch: 'full' },] },
    { path: 'login', component: Login, },
   { path: 'carrinho', component: Carrinho },
  { path: 'finalizar-compra', component: FinalizarCompra },



];
