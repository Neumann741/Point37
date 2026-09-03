import { Component, signal } from '@angular/core';
import { InterProd } from './inter-prod';

@Component({
  imports: [],
  selector: 'app-pag-prod',
  styleUrl: './pag-prod.css',
  templateUrl: './pag-prod.html',
})
export class PagProd {
   produto = [
    {
      nome: 'Whisky Single Malt 12 Anos',
      categoria: 'Whisky',
      volume: '750 ml',
      teor: '40% vol.',
      preco: 289.90,
      imagem: 'assets/whisky.jpg'
    },
    {
      nome: 'Gin Botânico Premium',
      categoria: 'Gin',
      volume: '700 ml',
      teor: '43% vol.',
      preco: 149.90,
      imagem: 'assets/gin.jpg'
    },
    {
      nome: 'Rum Envelhecido Reserva',
      categoria: 'Rum',
      volume: '750 ml',
      teor: '40% vol.',
      preco: 119.90,
      imagem: 'assets/rum.jpg'
    },
    {
      nome: 'Vodka Tradicional',
      categoria: 'Vodka',
      volume: '1 L',
      teor: '37,5% vol.',
      preco: 79.90,
      imagem: 'assets/vodka.jpg'
    },
    {
      nome: 'Tequila Reposado',
      categoria: 'Tequila',
      volume: '750 ml',
      teor: '38% vol.',
      preco: 219.90,
      imagem: 'assets/tequila.jpg'
    },
    {
      nome: 'Cachaça Extra Premium',
      categoria: 'Cachaça',
      volume: '700 ml',
      teor: '40% vol.',
      preco: 99.90,
      imagem: 'assets/cachaca.jpg'
    }
  ];
}
