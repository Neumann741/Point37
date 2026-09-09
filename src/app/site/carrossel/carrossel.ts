import { Component, OnDestroy, OnInit, signal } from '@angular/core';

type Slide = 'green' | 'blue' | 'red';

@Component({
  imports: [],
  selector: 'app-carrossel',
  styleUrl: './carrossel.css',
  templateUrl: './carrossel.html',
})
export class Carrossel implements OnInit, OnDestroy {
  protected readonly slideAtivo = signal<Slide>('green');

  private readonly slides: Slide[] = ['green', 'blue', 'red'];
  private temporizador?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.iniciarTrocaAutomatica();
  }

  ngOnDestroy(): void {
    this.pararTrocaAutomatica();
  }

  protected selecionarSlide(slide: Slide): void {
    this.slideAtivo.set(slide);
    this.iniciarTrocaAutomatica();
  }

  private iniciarTrocaAutomatica(): void {
    this.pararTrocaAutomatica();
    this.temporizador = setInterval(() => this.proximoSlide(), 5000);
  }

  private pararTrocaAutomatica(): void {
    if (this.temporizador) {
      clearInterval(this.temporizador);
    }
  }

  private proximoSlide(): void {
    const indiceAtual = this.slides.indexOf(this.slideAtivo());
    const proximoIndice = (indiceAtual + 1) % this.slides.length;
    this.slideAtivo.set(this.slides[proximoIndice]);
  }
}
