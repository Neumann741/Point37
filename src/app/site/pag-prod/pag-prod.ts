import { Component, inject, signal } from '@angular/core';
import { InterProd } from './inter-prod';
import { Header } from '../header/header';
import { MainPage } from '../main-page/main-page';
import { Footer } from '../footer/footer';
import { PagAdmService } from '../pag-adm/pag-adm-service';


@Component({
  imports: [Header, MainPage, Footer],
  selector: 'app-pag-prod',
  styleUrl: './pag-prod.css',
  templateUrl: './pag-prod.html',
})
export class PagProd {

  protected readonly consumoService = inject(PagAdmService);




}
