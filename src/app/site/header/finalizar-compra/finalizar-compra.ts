import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-finalizar-compra',
  styleUrl: './finalizar-compra.css',
  templateUrl: './finalizar-compra.html',
})
export class FinalizarCompra {

  constructor(private router: Router) {}

  irParaInicio(){
    this.router.navigate(['./pag-prod']);
  }
}
