import { Routes } from '@angular/router';
import { PagAdm } from './site/pag-adm/pag-adm';
import { MainPage } from './site/main-page/main-page';
import { PagProd } from './site/pag-prod/pag-prod';

export const routes: Routes = [

{ path: 'main-page', component: MainPage},
{path: 'pag-prod', component: PagProd},
{ path: 'pag-adm', component: PagAdm},
{ path: '', redirectTo: 'main-page' , pathMatch: 'full'}



];
