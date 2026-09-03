import { Component, signal } from '@angular/core';
import { InterProd } from './inter-prod';
import { Header } from '../header/header';
import { MainPage } from '../main-page/main-page';
import { Footer } from '../footer/footer';


@Component({
  imports: [ Header, MainPage, Footer],
  selector: 'app-pag-prod',
  styleUrl: './pag-prod.css',
  templateUrl: './pag-prod.html',
})
export class PagProd {
   readonly produtos :InterProd[] = [
    {
      nome: 'Whisky Single Malt 12 Anos',
      categoria: 'Whisky',
      volume: '750 ml',
      teor: '40% vol.',
      preco: 289.90,
    },
    {
      nome: 'Gin Botânico Premium',
      categoria: 'Gin',
      volume: '700 ml',
      teor: '43% vol.',
      preco: 149.90,  
    },
    {
      nome: 'Rum Envelhecido Reserva',
      categoria: 'Rum',
      volume: '750 ml',
      teor: '40% vol.',
      preco: 119.90,
      
    },
    {
      nome: 'Vodka Tradicional',
      categoria: 'Vodka',
      volume: '1 L',
      teor: '37,5% vol.',
      preco: 79.90,
      
    },
    {
      nome: 'Tequila Reposado',
      categoria: 'Tequila',
      volume: '750 ml',
      teor: '38% vol.',
      preco: 219.90,
      
    },
    {
      nome: 'Cachaça Extra Premium',
      categoria: 'Cachaça',
      volume: '700 ml',
      teor: '40% vol.',
      preco: 99.90,
      
    }
  ];
}
